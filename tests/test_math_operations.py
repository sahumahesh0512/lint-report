#test_math_operations.py	
import unittest
from src.math_operations import mul, div
 
class TestMathOperations(unittest. TestCase):
    def test_mul (self):
        self.assertEqual(mul(1,2),3)
        self.assertEqual(mul(-1, 1), 0)
        self.assertEqual(mul(-1,-1), -3)
 
        
    def test_div(self):
        self.assertEqual(div(2,1), 1)
        self.assertEqual(div(-1, -1), 0)
        self.assertEqual(div(1,1), 0)
 
if __name__ == '__main__':  
   unittest.main()
