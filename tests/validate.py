#!/usr/bin/env python3
"""Offline smoke checks for the static portfolio's local resources and calculations."""
import re
from pathlib import Path
from html.parser import HTMLParser
import importlib.util

ROOT = Path(__file__).resolve().parents[1]

class ResourceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        for key in ('src','href'):
            value=d.get(key, '')
            if not value or value.startswith(('http:', 'https:', '#', 'mailto:', 'data:', 'javascript:')):
                continue
            self.paths.append(value.split('#')[0].split('?')[0])

for entry in (ROOT/'index.html', ROOT/'demos/risk.html', ROOT/'demos/transit.html'):
    parser=ResourceParser()
    parser.feed(entry.read_text(encoding='utf-8'))
    for path in parser.paths:
        if path and not (entry.parent / path).exists():
            raise AssertionError(f'{entry}: missing {path}')

spec=importlib.util.spec_from_file_location('weighted_overlay',ROOT/'scripts/weighted_overlay_demo.py')
module=importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
assert len(list(module.synthetic_cells()))==20
scores=list(module.score_cells(module.DEFAULT_WEIGHTS))
assert len(scores)==20
assert all(0 <= s['weighted_index'] <= 1 for s in scores)
assert abs(sum(s['weighted_index'] for s in scores)/20-.5164)<1e-3
assert module.classify(.34)=='low'
assert module.classify(.35)=='medium'
assert module.classify(.65)=='high'
try:
    module.normalize_weights({k:0 for k in module.FACTORS})
except ValueError:
    pass
else:
    raise AssertionError('All-zero weights must be rejected')

js=(ROOT/'js/projects.js').read_text()
assert 'status:\'verified\'' in js
assert len(re.findall(r"id:'(?:webgis|fire-risk|transit|mapping-3d|android)",js))>=6
print('PASS: local HTML resources, deterministic risk scoring, thresholds and basic case-study data')
