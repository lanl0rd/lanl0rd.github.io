#!/usr/bin/python3

import os
import json
import subprocess

paths = []
for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
        path = os.path.join(root, name).replace('./', 'assets/', 1)
        if not ('.DS_Store' in path):
            paths.append(path)
with open('index.json', 'w') as json_file:
  json.dump(paths, json_file)


process = subprocess.Popen(["git", "add", "."], stdout=subprocess.PIPE)
output, error = process.communicate()
print('output add', output, 'error', error)

process = subprocess.Popen(["git", "commit", "-m", "\"assets\""], stdout=subprocess.PIPE)
output, error = process.communicate()
print('output commit', output, 'error', error)

process = subprocess.Popen(["git", "push"], stdout=subprocess.PIPE)
output, error = process.communicate()
print('output push', output, 'error', error)