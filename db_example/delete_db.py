import os
import psycopg2

yourProjectName = "f08942066-padns-midterm"

DATABASE_URL = os.popen('heroku config:get DATABASE_URL -a %s' % yourProjectName).read()[:-1]
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor()

delete_record_no = 1

postgres_delete_query = f"""DELETE FROM alpaca_training WHERE record_no = %s"""

cursor.execute(postgres_delete_query, (delete_record_no,))
conn.commit()

cursor.close()
conn.close()	