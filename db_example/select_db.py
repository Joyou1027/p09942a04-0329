import os
import psycopg2

yourProjectName = "f08942066-padns-midterm"

DATABASE_URL = os.popen('heroku config:get DATABASE_URL -a %s' % yourProjectName).read()[:-1]
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor()

postgres_select_query = f"""SELECT * FROM alpaca_training"""
cursor.execute(postgres_select_query)
conn.commit()

data = []
while True:
    temp = cursor.fetchone()
    if temp:
        data.append(temp)
    else:
        break
print(data)

cursor.close()
conn.close()	