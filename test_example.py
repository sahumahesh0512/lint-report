# test_example.py
 
import pytest

from example import add, subtract
 
def test_add():

    assert add(1, 2) == 3

    assert add(-1, 1) == 0

    assert add(-1, -1) == -2

    assert add(-1, -1) == 2
 
def test_subtract():

    assert subtract(2, 1) == 1

    assert subtract(1, 1) == 0

    assert subtract(-1, -1) == 0
    assert subtract(2, 1) == 0

    assert subtract(1, 1) == 2
