# Installation

Remember to use **virtual environment**.

### Set virtual environment

- using script

  > run `./scripts/venv.sh`.

- manually
  ```python
  py -m venv venv_charades
  # or 👇
  python3 -m venv venv_charades
  ```

---

### Activate virtual environment

<u>If you use script you can skip that step.</u>

```shell
source venv_charades/bin/activate
```

---

### Install required packages

<b><u>Important!</u></b><br />If you are planning to add new package, remember to update `requirements.txt` file.

- using script

  > run `./scripts/venv.sh`.

- manually

  ```python
  pip3 install -r requirements.txt
  ```

### Run app

```python
flask --app main run
```
