import os
from app import create_app
from flask_script import Manager, Shell

app = create_app('default')
manager = Manager(app)

@manager.command
def test(coverage=False):
    """Run the unit tests."""
    import unittest
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)

if __name__ == '__main__':
    manager.run()