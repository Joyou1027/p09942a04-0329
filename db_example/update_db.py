import os
import psycopg2

yourProjectName = "f08942066-padns-midterm"

DATABASE_URL = os.popen('heroku config:get DATABASE_URL -a %s' % yourProjectName).read()[:-1]
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor()

training = '肌力訓練'
postgres_update_query = f"""UPDATE alpaca_training SET training = '耐力訓練' WHERE training = %s"""

cursor.execute(postgres_update_query, (training,))
conn.commit()

count = cursor.rowcount

print(count, "Record updated successfully into alpaca_training")

cursor.close()
conn.close()	