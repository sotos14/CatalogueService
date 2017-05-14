from app import create_app

cat_app = create_app('default')

if __name__ == '__main__':
    cat_app.run()