#!/bin/bash

if ! type -P python3 >/dev/null 2>&1;
  then
    echo "Python3 not installed"
    exit 126
fi

if [ ! -d venv_charades ];
  then
    if [[ "$OSTYPE" =~ ^msys ]]; 
      then
        py -m venv venv_charades
      else
        python3 -m venv venv_charades
    fi
fi

if [[ "$OSTYPE" =~ ^msys ]]; 
  then
    source .\\venv_charades\\Scripts\\activate
  else
    source venv_charades/bin/activate
fi
