# The Community Bot (1.3.1)
===========================
**Was Webtoon Hub Bot**
A discord bot previously based on the server **Webcomics Hub!** as model for features and requirements. Now the features are expanding to occupy more than just webtoons community.
Give a star if you like :)


## Features
===========
### User
* Bot commands (prefix: **c!**)
* Featuring anime and webtoon related commands.
* Save images of your own creation to easily summon it in Discord.

### Developer
* Provides API for anime (Jikan) and webtoon.
* MySQL database integration using Sequelize.
* Migration and Seeding via Sequelize CLI.
* Custom functionality for array and object.

## Commands
===========
### Category
#### Anime
* searchanime
    ```
    Search anime through Jikan API.

    searchanime <anime_title>
    ```
* searchmanga
    ```
    Search manga through Jikan API.

    searchmanga <manga_title>
    ```
* showanime
    ```
    Show anime information through Jikan API.

    showanime <anime_id>
    ```
* showmanga
    ```
    Show manga information through Jikan API.

    showmanga <manga_id>
    ```

#### Competitive Programming
* showcp
    ```
    Show competitive programming question based on title.
    showcp <title>
    ```

#### Product
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
#### Role
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
#### Webtoon
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
#### Misc
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
