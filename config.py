import os
basedir = os.path.abspath(os.path.dirname(__file__))
        
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard to guess string'
    SSL_DISABLE = True
    DRY_RUN_API=False
    @staticmethod
    def init_app(app): pass
    
class TestingConfig(Config):
    TESTING = True
    DRY_RUN_API=True
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    @classmethod
    def init_app(cls,app):
        print("Using TestingConfig")

class DevelopmentConfig(Config):
    DEBUG = True
    @classmethod
    def init_app(cls, app):
        import logging
        from logging import StreamHandler
        stream_handler = StreamHandler()
        stream_handler.setLevel(logging.DEBUG)
        formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
        stream_handler.setFormatter(formatter)
        app.logger.addHandler(stream_handler)
        app.logger.debug("Using DevelopmentConfig")

config = {
    'development': DevelopmentConfig,
    'testing':TestingConfig,
    'default': DevelopmentConfig
}