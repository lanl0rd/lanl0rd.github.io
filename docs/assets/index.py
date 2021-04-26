#!/usr/bin/python3

import os
import json

paths = []
for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
        path = os.path.join(root, name).replace('./', 'assets/', 1)
        if not ('.DS_Store' in path):
            paths.append(path)
with open('index.json', 'w') as json_file:
  json.dump(paths, json_file)
