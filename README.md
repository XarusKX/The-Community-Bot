# Webcomics Hub Bot (1.3.1)
A discord bot made using the server **Webcomics Hub!** as model for features and requirements.
Give a star if you like :)

## Features
* Bot commands (prefix: **wh!**).
* Custom functionality for array and object.
* MySQL database integration.
* Web scraping.

## Category
### Product
* addproduct
    ```
    Add a single product under the message author name
    addproduct <product_type> <link> <title>

    product_type: art, comic, poet, story

    Note: For arts, adding the command '--save' allows uploading the image into the bot server.
    ```
* removeproduct
    ```
    Remove a single product under the message author name
    removeproduct <product_type> <title>
    ```
* listproduct
    ```
    Show list products of certain type belonging to a user.
    listproduct <mention user> <product_type> <page, default = 1>
    ```
* searchproduct
    ```
    Shows any products recorded in the database based on title filter.
    searchproduct <product_type> <title>
    ```

* showproduct
    ```
    Show a single product based on name and type.
    showproduct <product_type> <product_name>
    ```
### Role
* addrole
    ```
    Give role to user.
    Following Discord role hierarchy rules, bot can give any role that is hierarchically lower than its own.
    addrole <role name>
    ```
* listrole
    ```
    List all the server's roles (10 roles per page).
    listrole <page, default = 1>
    ```
* removerole
    ```
    Remove role from user.
    removerole <role name>
    ```
### Webtoon
* schedulewebtoon
    ```
    Shows what webtoon updates at specific day alphabetically sorted.
    schedulewebtoon <name of the day / today>
    ```
* searchwebtoon
    ```
    Search for a webtoon if exist in database.
    searchwebtoon <title>
    ```
* updatewebtoon
    ```
    updatewebtoon
    ```
### Misc
* help
    ```
    Show usage/instruction of a command.
    help <command name>
    ```
* ping
    ```
    Show latency.
    ping
    ```
