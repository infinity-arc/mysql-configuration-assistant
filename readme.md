# Simple Nodejs mysql client

How to use:

> Required:
> **Nodejs** 10 or later

1. Clone this repo
2. In the root directory create a file named `.env`
3. Place the DB credentials in the `.env` file.
        DBHOST=*
        DBUSER=*
        DBPW=*
4. To test the connection run `npm test`. A succesful connection will write this result to the console. 
5. To send any type of query to your server write it in the `script.sql` file and simply run `npm start` and the app will send your query to the configured server.

## Run your own assistant app with a MySQL container:

This example requires the following to be installed:

> **Nodejs** 10 or later
> **Docker** desktop client

### Steps: (Assuming the above was completed)

1. Pull and start the container from `docker hub`. Remember to change the root password to your own root secret root password by amendint the connection string:

```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=<my-secret-pw> -d mysql --port 3306:3306/tcp
```
> This normally takes a while, be sure to only process once done.

2. Next make sure to populate the .env file with the container details, which will look something like this:
        DBHOST=localhost
        DBUSER=root
        DBPW=<your super strong password>

3. Run `npm test` to test your configuration.

## Troubleshooting

In some instances MySQL will throw the error about an unsupported authentication method and that your client drivers must be updated. In this instance follow the steps below:

4. While your container is up and running enter it's command line by running this by doing the following run `docker ps --no-trunc``

5. Copy the container ID that will look a lot like this: 
        `729dacb835ccc7a1e732fa3efe2e79900afbc6cf7ee78548a4a875e1159c145b`

6. Use the container ID in the following command:
        ```
        docker exec -it <your container id> /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
        ```
        # This should log you into the a linux environment;

7. Use the MySQL command line interface by running: mysql -p<and your strong password>

8. Create a new user in the database container.
        * CREATE USER '<your user>' IDENTIFIED WITH mysql_native_password BY <your db admin strong password>;

9. Grant privileges to the new user.
        GRANT ALL PRIVILEGES ON * . * TO 'sysadmin';

10. Still logged into the container and mysql command line client flush the privileges.

11. Exit the mysql client and the container, update the .env in your own project.

12. Run `npm test` if the connection still fails your on your own from here on.

Good Luck, I hope you succeed.

## MIT



// CREATE USER 'sysadmin' IDENTIFIED WITH mysql_native_password BY 'sysadmin';

// GRANT ALL PRIVILEGES ON * . * TO 'sysadmin';

// docker ps --no-trunc

