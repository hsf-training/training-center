#!/usr/bin/env python3

"""Sort data file for easy comparison with previous version tracked in main HSF repo."""

from pathlib import Path
import sys
import yaml
import logging


if __name__ == "__main__":
    if len(sys.argv) == 2:
        data_file = Path(sys.argv[1])
    else:
        this_dir = Path(__file__).resolve().parent
        assert this_dir.is_dir()
        data_dir = this_dir.parent / "data"
        assert data_dir.is_dir()
        data_file = data_dir / "data.yaml"
        assert data_file.is_file()
    logging.debug("Foun data file at %s", data_file)
    data = yaml.safe_load(data_file.read_text())
    data_sorted = sorted(data, key=lambda x: x["name"])
    data_file.write_text(yaml.dump(data_sorted))
