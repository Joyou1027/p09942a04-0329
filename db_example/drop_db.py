import os
import psycopg2

yourProjectName = "f08942066-padns-midterm"

DATABASE_URL = os.popen('heroku config:get DATABASE_URL -a %s' % yourProjectName).read()[:-1]
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor()


postgres_drop_query = f"""DROP TABLE IF EXISTS alpaca_training"""

cursor.execute(postgres_drop_query)
conn.commit()

cursor.close()
conn.close()	