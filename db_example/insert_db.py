import os
import psycopg2

yourProjectName = "f08942066-padns-midterm"

DATABASE_URL = os.popen('heroku config:get DATABASE_URL -a %s' % yourProjectName).read()[:-1]
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor()

record = ('吉姆', '肌力訓練', '1:30:00', '2019-09-24')
table_columns = '(alpaca_name, training, duration, date)'
postgres_insert_query = f"""INSERT INTO alpaca_training {table_columns} VALUES (%s, %s, %s, %s);"""

cursor.execute(postgres_insert_query, record)
conn.commit()

count = cursor.rowcount

print(count, "Record inserted successfully into alpaca_training")

cursor.close()
conn.close()	