'use strict';

const request = require("request");
const cheerio = require("cheerio");
const objfunc = require("../modules/object_functionality.js");
const Discord = require("discord.js");

module.exports.updateWebtoon = function (client) {
  request("https://www.webtoons.com/en/dailySchedule", function (err, res, body) {
    if (err && res.statusCode !== 200) throw err;
    let $ = cheerio.load(body);

    let j = 0;
    let webtoon = [];

    $("a.daily_card_item").each( function(i, obj) {
        let link = $(this).attr("href");
        let childPrime = $(this).children();
        let title = childPrime.find("p.subj").text();
        let author = childPrime.find("p.author").text();
        let image = $(childPrime[0]).attr("src");
        let genre = $(childPrime[1]).text();
        let likes = childPrime.find("em.grade_num").text();

        webtoon[j++] = { title: title, author: author, genre: genre, image: image, link: link, likes: likes };
    });
    webtoon = objfunc.removeDuplicates(webtoon, "title");
    webtoon.sort(objfunc.compareFuncByTitle);
    client.db1.Webtoons.bulkCreate(webtoon, { updateOnDuplicate: true })
      .then(() => {
        console.log(`${client.config.cliColor("GREEN")} Success added! ${client.config.cliColor("NC")}`);
      })
      .catch(() => {
        console.error(`${client.config.cliColor("RED")} Something's wrong, the update fail :( ${client.config.cliColor("NC")}`);
      })
  });
}

module.exports.showWebtoon = function (client, msg, url) {
  var comic = { title: "", author: "", link: "", description: "", image: "", rating: "" };

  request((client, msg, url), function (err, res, body) {
    if (err && res.statusCode !== 200) throw err;
    let $ = cheerio.load(body);

    $(".subj").filter( function() {
      var data = $(this);
      comic.title = data.text();
    });

    $(".author").filter( function() {
      var data = $(this);
      comic.author = data.text();
    });

    comic.link = url;

    $(".summary").filter( function() {
      var data = $(this);
      comic.description = data.text();
    });

    $(".detail_header.type_black").filter( function(){
    	var data = $(this);
      comic.image = data.children().children().attr("src");
    });

    $("#_starScoreAverage.cnt").filter( function() {
      var data = $(this);
      comic.rating = data.text();
    });

    client.db1.Webtoons.findOne({ where: { title: comic.title } })
      .then(webtoon => {
        let embed = new Discord.RichEmbed()
          .setTitle(comic.title)
          .setAuthor("Webtoon Manager")
          .setColor(0x3fd953)
          .setDescription(comic.description)
          .setImage(comic.image)
          .setURL(comic.link)
          .addField("Rating", `:star: ${comic.rating}`, true)
          .addField("Likes", `:heart: ${webtoon.likes}`, true);

        msg.channel.send(embed);
      }).catch(() => {
        console.error();
      })

  });

}
