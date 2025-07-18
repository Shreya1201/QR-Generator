# QR Generator
   This project is a web-based application built using Angular for the frontend and Flask (Python) for the backend, with PostgreSQL as the database. QR Generator enables users to create, manage, and save QR codes, as well as shorten URLs, all through a clean and user-friendly interface.

    User Account & Authentication
    1. Users can register for an account.
    2. Users can log in and log out securely.
    3. Users can sign up via Google authentication.
    4. CAPTCHA must be entered before login. (Code commented)
    5. User profile page is provided to edit details.
    6. Users can delete their account at any time.
    7. Users can change their password.


    QR Code and URL shortener Features
    1. Users can generate QR codes using: 
        o A link (URL-based QR generation).
        o Wi-Fi credentials (SSID & Password).
    2. New users can generate QR codes without logging in.
    3. Users must log in to save their generated QR codes.
    4. A user dashboard displays saved QR codes.
    5. Users can edit, remove, and download already saved QR codes.
    6. Users can shorten URLs
    7. "Contact Us" form is available for queries and feedback.

## Screen Recording (Full Working of Project)
https://github.com/user-attachments/assets/66080c6b-4eaa-4055-a027-456c686fc68e

## Technology Stack: 

    1. Frontend: Angular CLI 19.2.1, Node.js 20.11.1 (npm 10.8.0)
    2. Backend: Python 3.11 with Flask
    3. Database: Postgresql


### Backend

1. Install python 3.11
2. python -m venv venv
3. Activate environment
   1. For Windows
         - In cmd.exe - venv\Scripts\activate.bat  
         - In PowerShell - venv\Scripts\Activate.ps1
   2. For Linux and MacOS
         - source venv/bin/activate

`Go inside backend directory then run these commands`

4. python setup.py develop
5. pip install -r requirements.txt
6. Rename **.env.template** to **.env**
7. To start backend server, multiple ways  
   1. Using Python directly: "python app.py"
   2. Using uWSGI (command line): "uwsgi --http localhost:5011 --wsgi-file app.py --callable app"
   3. Using uWSGI with a config file: "uwsgi --ini qr_generator.ini"
   4. Using Gunicorn: "gunicorn -b localhost:5011 app:app --access-logfile -"
   
   ```
   pip install uwsgi, gunicorn, for using 2nd, 3rd and 4th command  
   Note: `uwsgi` and `gunicorn` may not install natively on Windows. 
   To use it on Windows, consider installing `uwsgi` via Docker or within a WSL environment.
   ```
     
### Frontend

*   nvm install 20.11.1
*   nvm use 20.11.1
*   npm install @angular/cli@19.2.1 (Inside foserver)


  1. Navigate to the frontend folder:
     ```bash
     cd foserver
     ```
  
  2. The `src/environment/` folder is ignored via `.gitignore`. You must create the `environment.ts` file manually.  
     Sample `environment.ts` file:
     ```ts
     export const environment = {
       apiUrl: 'http://localhost:5011/',
       encryptionKey: '',
       encryptionIv: ''
     };
     ```
  
     Save this file at `src/environment/environment.ts`
  
  3. Install Angular dependencies:
     ```bash
     npm install
     ```
  
  4. Start the Angular development server:
     ```bash
     ng serve
     ```

### Database:
- To export database from Neon DB 
- Firstly download PostgreSQL Installer, then run this command
```bash
"C:\Program Files\PostgreSQL\15\bin\pg_dump.exe" --schema=public --schema-only --no-privileges --verbose "postgresql://DB_USERNAME:DB_PWD@DB_HOST/DB_NAME" > qr_generator.sql
```

## Screenshots

Login Page
![image](https://github.com/user-attachments/assets/2681dd23-0f4b-44ca-906a-f67ff8263ff9)

Register Page
![image](https://github.com/user-attachments/assets/bedbd0fd-693d-44dc-a79f-9c8db11e9b8a)

QR Generator Page
![image](https://github.com/user-attachments/assets/1889ec96-3a90-4948-8e1f-cb1d11a4c724)

To generate QR codes from links
![image](https://github.com/user-attachments/assets/1b1d8d79-f9e1-4da9-9098-03f4f0ee2009)

URL Shortener Page
![image](https://github.com/user-attachments/assets/dab6079f-7bf2-49a9-b62d-85adde6b0f9f)

QR Dashboard Page
![image](https://github.com/user-attachments/assets/b9490538-773e-49a7-af02-21dfbcf0f3a5)

User Profile Page
![image](https://github.com/user-attachments/assets/a05f3aba-a496-4ff6-98ed-f485c2dd1752)

Change Password
![image](https://github.com/user-attachments/assets/d560c4aa-147d-4058-8866-c3a39c4dcdfc)

Contact Us Page
![image](https://github.com/user-attachments/assets/e22c5636-6ebd-4243-aab8-600e52e2b197)


## References:

1. For Git/GitHub – 
   1. https://youtu.be/cn8l5bXhTBM?si=5VbjlfbdbAwmSDUO
   2. https://youtu.be/k5D37W6h56o?si=F57C_thMym5P0Krr
   3. https://youtu.be/fI-2k_XqXLg?si=WRUbZPHsfxcO0l2t


2. For SSH – 
   1. Issue - https://stackoverflow.com/questions/29297154/github-invalid-username-or-password
   2. To add SSH Key - https://www.youtube.com/watch?v=xkhUH9Fx2z8
   3. https://www.youtube.com/watch?v=z7jVOenqFYk
   4. https://www.youtube.com/watch?v=lRMAJwMQ0Vc
    

3. JWT (Json Web Token)
    1. https://www.sitepoint.com/using-json-web-tokens-node-js/
    2. https://www.geeksforgeeks.org/how-does-the-token-based-authentication-work/sa
    3. https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/
    4. https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf
    5. https://portswigger.net/web-security/csrf
    6. https://www.descope.com/blog/post/developer-guide-jwt-storage#common-jwt-storage-methods


4. URL Shortner
    1. https://kitrakiar73.medium.com/url-shortner-how-to-build-one-f458fecf038f


4. To generate Captcha
    1. https://medium.com/@nomannayeem/cracking-the-captcha-code-your-complete-guide-to-understanding-and-implementing-captcha-technology-cf606367e8af
    2. https://medium.com/@varun.tyagi83/a-guide-to-building-a-captcha-verification-system-in-python-1a5c62922674


6. To Setup Redis
    1. https://youtu.be/DLKzd3bvgt8?si=el1tsVM-V61a976G
    2. To connect redis with flask https://medium.com/@fahadnujaimalsaedi/using-flask-and-redis-to-optimize-web-application-performance-34a8ae750097
    3. Open file redis.windows-service.conf on path C:\Program Files\Redis and uncomment the line - 
        Change # requirepass foobared --> requirepass __your_redis_password__
    4. redis-server --service-stop
    5. redis-server --service-start
    6. redis-cli    --> auth __your_redis_password__    --> keys *

 
7. To send mail for contact 
   1. https://www.geeksforgeeks.org/send-mail-gmail-account-using-python/
   2. https://www.freecodecamp.org/news/send-emails-in-python-using-mailtrap-smtp-and-the-email-api/
   3. Use of Mailtrap and Google App password (https://support.google.com/mail/answer/185833?hl=en)
   4. Mimetext, Mimebase, MimeMultipart - https://stackoverflow.com/questions/38825943/mimemultipart-mimetext-mimebase-and-payloads-for-sending-email-with-file-atta


8. OAuth Intro and Implementation
   1. https://youtu.be/ZDuRmhLSLOY?si=H5CXEFra8PbNdP0y
   2. https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66
   3. Code - https://www.geeksforgeeks.org/oauth-authentication-with-flask-connect-to-google-twitter-and-facebook/
   4. To Setup in Google cloud console - https://youtube.com/shorts/WABhO9KsOpU?si=pW-R7SMcw46sSrDl



## Setup & Flow of some Features
### Email Sending
1. At payload, getting email, name and msg
2. Add your email and app generated password by Gmail on Config.py file
3. At SMTP server, login with email and password 
4. Send email to the user you want to send

### URL Shortener
1. At payload - long_url
2. If url exist in DB, then fetch and return it
3. Generate uuid and convert uuid to unique numeric_id i.e. of 128-bit (32 hex digits). 
4. Generate short hashValue using base62 conversion, store that hash_value corresponding to long url
5. Return short url
6. 2nd API called - When user click on short_url then api called which retrieve long_url and redirect it

### Captcha Generation
1. Add captcha details in config file
2. Generate captcha code with random char 
3. Using generated captcha code, create image and store that uuid with captcha code in redis 
4. Return uuid and captcha image in response
5. 2nd API called - When user input captcha and submit then using uuid retrieve captcha code and check inputted and store captcha code

### OAuth
1. Create client id & client secret key and add it to config file 
2. Register the Oauth provider 
3. Function - it sends the user to Google Login Page, after user logs in, Google will send back user to app(to 2nd API /oauth2callback) with an authorization code
4. Further this /oauth2callback api exchange code with token.
