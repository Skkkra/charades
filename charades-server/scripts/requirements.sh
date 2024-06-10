#!/bin/bash

if ! type -P pip3 >/dev/null 2>&1;
  then
    echo "Pip3 not installed"
    exit 126
fi

if [ -d venv_charades ];
  then
    pip3 install -r requirements.txt
  else
    echo "No venv directory!"
fi
