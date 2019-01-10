/*
SQLyog Ultimate v12.14 (64 bit)
MySQL - 10.1.25-MariaDB : Database - dam
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dam` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dam`;

/*Table structure for table `download` */

DROP TABLE IF EXISTS `download`;

CREATE TABLE `download` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(11) NOT NULL,
  `download_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `file_id` (`file_id`),
  CONSTRAINT `download_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `file` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

/*Data for the table `download` */

insert  into `download`(`id`,`file_id`,`download_count`) values 
(11,518,25),
(12,517,31),
(13,516,7),
(14,519,2),
(15,520,2),
(16,524,1),
(17,523,1),
(18,529,1),
(19,530,1),
(20,548,1),
(21,521,1);

/*Table structure for table `favorite` */

DROP TABLE IF EXISTS `favorite`;

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(11) NOT NULL,
  `user_id` longtext NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `file_id` (`file_id`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `file` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;

/*Data for the table `favorite` */

insert  into `favorite`(`id`,`file_id`,`user_id`,`user_name`) values 
(68,519,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(69,516,'undefined','undefined'),
(74,530,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(75,529,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(76,528,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(77,531,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(78,532,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(79,533,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(81,534,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa'),
(82,516,'S-1-5-21-4137928596-3823370957-2990426169-21565','jeremy.espinosa');

/*Table structure for table `file` */

DROP TABLE IF EXISTS `file`;

CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `image` text NOT NULL,
  `image_thumbnail` text NOT NULL,
  `image_download` text NOT NULL,
  `keywords` longtext,
  `date_created` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=556 DEFAULT CHARSET=latin1;

/*Data for the table `file` */

insert  into `file`(`id`,`name`,`image`,`image_thumbnail`,`image_download`,`keywords`,`date_created`) values 
(516,'iStock-114267471','images/dam/iStock-114267471.jpg','images/thumbnails/iStock-114267471.jpg','images/dam/iStock-114267471.jpg','test,wew,wooo,aneno,wowowee,testing,another test,heyyy,testing,wew,wewewe,zzz,hey,huhu,wew,aaa,wew','2018-10-18'),
(517,'iStock-120759303','images/dam/iStock-120759303.jpg','images/thumbnails/iStock-120759303.jpg','images/dam/iStock-120759303.jpg','sample,testing, new, image,wewew','2018-10-18'),
(518,'iStock-149055062','images/dam/iStock-149055062.jpg','images/thumbnails/iStock-149055062.jpg','images/dam/iStock-149055062.jpg','wewew,whyyy,huhu,Plss gumana ka na,Auditorium,Color Image,Convention Center,Nobody,Stage Theater,business presentation,row of chairs,sample,asd,sample,wew,something,hey,something,wew,hey,wewewe,zzz, wawa, huhu','2018-10-18'),
(519,'iStock-157279647','images/dam/iStock-157279647.jpg','images/thumbnails/iStock-157279647.jpg','images/dam/iStock-157279647.jpg','Testing,NAni,No People,Pew,Wood Paneling,Pulpit,Hymnal,Aisle,Cross,Auditorium,Altar,Christianity,Illuminated,Cultures,Inside Of,Wide Angle,Indoors,Domestic Room,Chapel,Church,Overhead Projector,baptist church,church building,church interior,wood beams,Church Sanctuary,Traditional Church,Wooden Pew,Communion Table,Architecture And Buildings,Places Of Worship,Center Aisle,christ,sampling','2018-10-18'),
(520,'iStock-157613096','images/dam/iStock-157613096.jpg','images/thumbnails/iStock-157613096.jpg','images/dam/iStock-157613096.jpg','Arts,Culture and Entertainment,Travel,Nobody,Seat,Large Group of Objects,Comfortable,Nightlife,Musical Theater,Lighting Equipment,Gold,Auditorium,Stage,Opera House,Movie Theater,Illuminated,Baroque Style,Classical Style,Majestic,Wealth,Relaxation,Luxury,Elegance,Red,Shiny,In A Row,Traditional Culture,Empty,Architecture,Travel Destinations,Indoors,Horizontal,Italy,Light,Decoration,Balcony,Floor,Stage Theater,Built Structure,Opera,Theatrical Performance,Classical Concert,Chair,Architecture And Buildings','2018-10-18'),
(521,'iStock-170036830','images/dam/iStock-170036830.jpg','images/thumbnails/iStock-170036830.jpg','images/dam/iStock-170036830.jpg','Tutor,Adolescence,Student,College Student,Wisdom,Women,Female,Men,Male,Large Group Of People,Group Of People,Seminar,Back to School,Whiteboard,Auditorium,Senior Adult,Mature Adult,Young Adult,Adult,Teenager,Explaining,Talking,Using Voice,Sitting,Listening,Studying,Showing,Intelligence,Teaching,Learning,Caucasian,Expertise,Teamwork,Discussion,Communication,Togetherness,Assistance,Blue,Education,Indoors,Horizontal,Rear View,High Angle View,Audience,Crowd,Teacher,Professor,Adult Student,People,Amphitheater,Classroom,School,Lecture Hall,Campus,University,Exam,Desk,Freshman,Team,Concepts And Ideas,Lifestyle,Teamwork,Young Adults,Industry,Education,Notebook,Interactive Whiteboard,Assistant, twiceee','2018-10-18'),
(522,'iStock-178369860','images/dam/iStock-178369860.jpg','images/thumbnails/iStock-178369860.jpg','images/dam/iStock-178369860.jpg','\"Vibrant Color,1940-1980 Retro-Styled Imagery,Antique,Architectural Detail,Architectural Feature,Architecture,Architecture And Buildings,Architecture Backgrounds,Armchair,Backgrounds,Baroque Style,Brown,Chair,Classic,Color Image,Comfortable,Copy Space,Dark,Decor,Decoration,Domestic Room,Elegance,Empty,Floor,Furniture,Grunge,Home Interior,Hotel,Household Objects/Equipment,Image,Indoors,Inside Of,Living Room,Lobby,Luxury,Marble,Marble Floor,Nobody,Objects/Equipment,Obsolete,Old,Old-fashioned,Photography,Residential Structure,Retro Revival,Seat,Style,Surrounding Wall,Tiled Floor,Toned Image,Wall,Wallpaper,Wallpaper Pattern\",Wood','2018-10-18'),
(523,'iStock-182177494','images/dam/iStock-182177494.jpg','images/thumbnails/iStock-182177494.jpg','images/dam/iStock-182177494.jpg','\"Beautiful,Fashion,Food And Drink Industry,Dining,Crystal,Setting,Meal,Caterer,Nightlife,High Society,Ornate,Wineglass,Wedding Reception,Glass,Drinking,Performance,Romance,Excitement,Luxury,Elegance,Glamour,Linen,High Section,Inside Of,Indoors,Food Service Occupation,Entrance Hall,Domestic Room,Hotel,Restaurant,Residential District,Party,Event,Breakfast,Dinner,Banquet,Dinner Party,Food,Wine,Formalwear,Dishware,Silverware,Kitchen Utensil,Tablecloth,Decor,Table,Set,Food And Drink\"','2018-10-18'),
(524,'iStock-182850497','images/dam/iStock-182850497.jpg','images/thumbnails/iStock-182850497.jpg','images/dam/iStock-182850497.jpg','Architecture,Arts And Entertainment,Backdrop,Backstage,Behind,Classical Theater,Color Image,Curtain,Horizontal,Indoors,Movie Theater,No People,Photography,Reflector,Rigging,Rope,Seat,Stage,Stage Theater,Theatre,Theatrical Performance','2018-10-18'),
(525,'iStock-464899931','images/dam/iStock-464899931.jpg','images/thumbnails/iStock-464899931.jpg','images/dam/iStock-464899931.jpg','Audience,Auditorium,Backgrounds,Business,Businesswoman,Caucasian,Communication,Conference,Congress,Discussion,Domestic Room,Education,Equipment,Event,Female,Indoors,Inside Of,Learning,Manager,Meeting,Microphone,People,Presentation,Professional Occupation,Professor,Public Speaker,Seat,Seminar,Speech,Spokesman,Talking,Training,Women,Young Adult,spokeswoman,Hot chick','2018-10-18'),
(526,'iStock-466048678','images/dam/iStock-466048678.jpg','images/thumbnails/iStock-466048678.jpg','images/dam/iStock-466048678.jpg','Number of People,Human Gender,Megastore,Postmodern,Brightly Lit,Consumerism,Fashion,Unrecognizable Person,Food Court,Women,Female,People In The Background,Large Group Of People,Group Of People,Window Shopping,Comfortable,Sale,Shopaholic,Striding,Central Berlin,Clothing Store,Temptation,Shopping,Buying,Walking,Choice,Elegance,Bright,Clean,Modern,Business,Architecture,Retail,Indoors,Blurred Motion,People,Berlin,Shopping Mall,Department Store,Store,Retail Display,Mannequin','2018-10-18'),
(527,'iStock-485965692','images/dam/iStock-485965692.jpg','images/thumbnails/iStock-485965692.jpg','images/dam/iStock-485965692.jpg','Home Ownership,Loft Apartment,Residential Building,No People,Copy Space,Home Showcase Interior,Housing Project,Hardwood Floor,Waiting Room,Concrete,Elegance,Three-dimensional Shape,White,Gray,Wood - Material,Dirty,Modern,Architecture,Indoors,Horizontal,Digitally Generated Image,Decoration,Flooring,Wall - Building Feature,Living Room,Domestic Room,Apartment,Office Interior,Design,Decor,Sofa,Style','2018-10-18'),
(528,'iStock-496387636','images/dam/iStock-496387636.jpg','images/thumbnails/iStock-496387636.jpg','images/dam/iStock-496387636.jpg','Clubbing,Funky,Men,Group Of People,Disk,Nightlife,Nightclub,Club Dj,Entertainment Club,Music,Young Adult,Adult,Disco Dancing,Dancing,Energy,Entertainment,Crowd,People,Smoke - Physical Structure,Party - Social Event','2018-10-18'),
(529,'iStock-501959627','images/dam/iStock-501959627.jpg','images/thumbnails/iStock-501959627.jpg','images/dam/iStock-501959627.jpg','Dance And Electronic,Clubbing,Music Festival,Real People,Candid,Guitarist,Funky,Performing Arts Event,Arms Outstretched,Young Women,Women,Females,Young Men,Men,Males,Large Group Of People,Group Of People,Copy Space,Celebration,Sound,Electric Mixer,Nightlife,Youth Culture,Lighting Equipment,Radio Dj,Nightclub,Club Dj,Musical Band,Fan - Enthusiast,Stage - Performance Space,Music,20-29 Years,Young Adult,Adult,Arms Raised,Cheering,Singing,Standing,Looking,Playing,Dancing,Spectator,Caucasian Ethnicity,Multi-Ethnic Group,Illuminated,Cool,Carefree,Performance,Part Of,Entertainment,Lifestyles,Audience,Crowd,Musician,Performer,People,Night,Popular Music Concert,Party - Social Event,Casual Clothing,Techno','2018-10-18'),
(530,'iStock-505049647','images/dam/iStock-505049647.jpg','images/thumbnails/iStock-505049647.jpg','images/dam/iStock-505049647.jpg','Brightly Lit,Fashion,Merchandise,Men,City Life,Midsection,Shopping,Buying,Walking,Customer,Motion,Bright,Glass - Material,Modern,Crowded,Inside Of,Business,Retail,Urban Scene,Indoors,Blurred Motion,Crowd,People,Hong Kong,China - East Asia,Asia,Reflection,Light - Natural Phenomenon,Corridor,Flooring,Ceiling,Shopping Mall,Store,City,Retail Display,Shopping Bag,Bag,Clothing,Motion Blurred,Regional2014,LypseHK2014','2018-10-18'),
(531,'iStock-506827926','images/dam/iStock-506827926.jpg','images/thumbnails/iStock-506827926.jpg','images/dam/iStock-506827926.jpg','African Descent,Latin America,Food And Drink Industry,Social Gathering,Healthy Eating,Women,Men,Group Of People,Dieting,Gourmet,Family Reunion,30-39 Years,Young Adult,Smiling,Laughing,Eating,Healthy Lifestyle,African Ethnicity,Multi-Ethnic Group,Latin American and Hispanic Ethnicity,Meeting,Sharing,Bonding,Togetherness,Enjoyment,Friendship,Food And Drink,Lifestyles,Cheerful,People,Colombia,Restaurant,Celebration Event,Lunch,Dinner,Food,Plate,Table,food service,wooden table,Latin Food,Reunion - Social Gathering','2018-10-18'),
(532,'iStock-515810476','images/dam/iStock-515810476.jpg','images/thumbnails/iStock-515810476.jpg','images/dam/iStock-515810476.jpg','Wireless Technology,Male Beauty,Toothy Smile,One Parent,Touch Screen,Boys,Young Men,Men,Males,Two People,Copy Space,Looking Away,Music,Headphones,Child,Smiling,Listening,Looking,Holding,Fun,Caucasian Ethnicity,Sharing,Bonding,Connection,Togetherness,Innocence,Enjoyment,Happiness,Love,Care,Part Of,Small,Entertainment,Technology,Childhood,Outdoors,Affectionate,Cheerful,Positive Emotion,Blond Hair,Son,Father,Parent,Family,People,Mobile Phone,Casual Clothing,Single Father,Attractive Male','2018-10-18'),
(533,'iStock-516394706','images/dam/iStock-516394706.jpg','images/thumbnails/iStock-516394706.jpg','images/dam/iStock-516394706.jpg','Bluetooth,Wireless Technology,Audio Equipment,Sound,Speaker,Amplifier,Recording Studio,Lighting Equipment,Music,Mobility,Black Color,Modern,New,Technology,Domestic Room,Laptop,Mobile Phone,Equipment,Stereo,Table,Subwoofer,Interface Icons','2018-10-18'),
(534,'iStock-525206150','images/dam/iStock-525206150.jpg','images/thumbnails/iStock-525206150.jpg','images/dam/iStock-525206150.jpg','Earbud,Smart Phone,Audio Equipment,Hands-free Device,Sound,Music,Headphones,Mobility,Communication,Wood - Material,Modern,Entertainment,Technology,Lifestyles,Mobile Phone,Equipment,Personal Accessory,Desk,Table,Iphone,Audio Available Online','2018-10-18'),
(535,'iStock-534786971','images/dam/iStock-534786971.jpg','images/thumbnails/iStock-534786971.jpg','images/dam/iStock-534786971.jpg','Clear Sky,Travel,Tourism,Government,Non-Urban Scene,Building Exterior,Hirohito,Visit,Emperor,Literature,Exhibition,Auditorium,Office Building,Japanese Culture,Chinese Culture,Cultures,National Landmark,Famous Place,Construction Industry,Architecture,Urban Scene,Tourist,People,Taipei,Taiwan,Japan,China - East Asia,Asia,Day,Sky,Corridor,Entrance Hall,Office Interior,Park - Man Made Space,Town Square,Gate,Built Structure,Urban Skyline,Cityscape,City,Flag,Design,zhongshan,dignitaries,Entrance,Hu Qing','2018-10-18'),
(536,'iStock-591821200','images/dam/iStock-591821200.jpg','images/thumbnails/iStock-591821200.jpg','images/dam/iStock-591821200.jpg','No People,Looking At View,Glowing,Textured,Looking Through Window,Comfortable,Lobby,Tile,Hotel Reception,Waiting,Beauty,Wide,Luxury,Elegance,Bright,Wood - Material,Clean,Modern,Pattern,Ideas,Business,Architecture,Indoors,Textured Effect,Day,Marble,Decoration,Balcony,Entrance Hall,Flooring,Window,Wall - Building Feature,Living Room,Domestic Room,House,Home Interior,Cafe,Hotel,Restaurant,Built Structure,Design,Electric Lamp,Cushion,Decor,Table,Armchair,Chair,Sofa,Furniture,3d rendering,Style,Lounge','2018-10-18'),
(537,'iStock-621918698','images/dam/iStock-621918698.jpg','images/thumbnails/iStock-621918698.jpg','images/dam/iStock-621918698.jpg','Real People,Student,Audio Equipment,New Business,Leisure Activity,Females,Men,Males,Group Of People,Comfortable,Copy Space,Love At First Sight,Drum Kit,Speaker,Amplifier,Rehearsal,Recording Studio,Lens Flare,Bass Guitar,Practicing,Musical Band,Electric Guitar,Music,Singer,20-29 Years,Young Adult,Adult,Smiling,Singing,Listening,Playing,Playful,Fun,Caucasian Ethnicity,Sharing,Bonding,Connection,Togetherness,Relaxation,Joy,Enjoyment,Happiness,Love,Lifestyles,Indoors,Horizontal,Cheerful,Recreational Pursuit,Long Hair,People,Shadow,Microphone,Studio,Drum,Guitar,Hipster','2018-10-18'),
(538,'iStock-626304596','images/dam/iStock-626304596.jpg','images/thumbnails/iStock-626304596.jpg','images/dam/iStock-626304596.jpg','Smart Phone,Wireless Technology,Travel,Coffee Break,Fashion,White Collar Worker,Text Messaging,Businessman,Men,Busy,Surfing the Net,Multi-Tasking,Young Adult,Adult,Smiling,Holding,Caucasian Ethnicity,Business Travel,One Person,Connection,Communication,Happiness,Elegance,Accessibility,Modern,Business,Technology,Urban Scene,Outdoors,Manager,Professional Occupation,Occupation,People,Street,Internet,Mobile Phone,Telephone,Coffee - Drink,Drink,Formalwear,Cup,Coffe To Go','2018-10-18'),
(539,'iStock-626640720','images/dam/iStock-626640720.jpg','images/thumbnails/iStock-626640720.jpg','images/dam/iStock-626640720.jpg','Couple - Relationship,Colombian Ethnicity,Travel,Service,People Traveling,Tourism,Women,Females,Men,Males,Inn,Clipboard,Hotel Reception,20-29 Years,Adult,Writing,Smiling,Talking,Latin American and Hispanic Ethnicity,Bonding,Togetherness,Journey,Happiness,Friendship,Travel Destinations,Vacations,Lifestyles,Outdoors,Cheerful,Manual Worker,Manager,Occupation,Heterosexual Couple,People,Colombia,South America,Summer,Hotel,Document,Casual Clothing,guesthouse,Romantic Getaway','2018-10-18'),
(540,'iStock-628483496','images/dam/iStock-628483496.jpg','images/thumbnails/iStock-628483496.jpg','images/dam/iStock-628483496.jpg','Summit,Participant,Information Medium,Businessman,Men,Group Of People,Seminar,Congress,Presentation,Speaker,Conference Call,Organized Group,Training Class,Coach,Convention Center,Speech,Public Speaker,Explaining,Sitting,Listening,Teaching,Learning,Meeting,Expertise,Teamwork,Discussion,Education,Business,Audience,Manager,Business Person,Teacher,Professional Occupation,People,Workshop,Lecture Hall,University,Education Building,Public Building,Chart,Computer Monitor,Event,entrepreneurship,white screen,Team,Conference,Corporate Business,Conference,Entrepreneur','2018-10-18'),
(541,'iStock-629354832','images/dam/iStock-629354832.jpg','images/thumbnails/iStock-629354832.jpg','images/dam/iStock-629354832.jpg','Arts,Culture and Entertainment,Tennis Outfit,Tennis Ball,One Young Man Only,Men,Four People,Large Group Of People,Weekend Activities,Watching TV,Sports Event,Celebration,Applauding,Hardwood Floor,Tennis Racket,Skirt,Fan - Enthusiast,Taking A Shot - Sport,Smiling,Gesturing,Cheering,Sitting,Hitting,Fun,Caucasian Ethnicity,Success,Excitement,Speed,Sport,Indoors,Outdoors,Cheerful,Emotion,Tennis,Racket Sport,Professional Sport,Competitive Sport,Mother,Father,Family,People,Window,Living Room,Sports Venue,Equipment,Television Set,Racket,Casual Clothing,Carpet - Decor,Sofa,Match - Sport','2018-10-18'),
(542,'iStock-629984906','images/dam/iStock-629984906.jpg','images/thumbnails/iStock-629984906.jpg','images/dam/iStock-629984906.jpg','Homegrown Produce,Dining,Healthy Eating,Leisure Activity,Only Women,Mature Women,Women,Females,Three People,Meal,Copy Space,Weekend Activities,Adults Only,Green Tea,Organic,Diner,Young Adult,Smiling,Laughing,Talking,Sitting,Eating,Nutritional Supplement,Healthy Lifestyle,Caucasian Ethnicity,Energy,Discussion,Togetherness,Enjoyment,Friendship,British Culture,Small Business,Food And Drink,Indoors,Horizontal,Close-up,Vegetable,Cafe,Restaurant,Salad,Lunch,Dinner,Vegan Food,Gluten Free Food','2018-10-18'),
(543,'iStock-663837894','images/dam/iStock-663837894.jpg','images/thumbnails/iStock-663837894.jpg','images/dam/iStock-663837894.jpg','stone,building,built,structure,column,vanishing,place,arc,perspective,destinations,wall,style,lamp,gothic','2018-10-18'),
(544,'iStock-94979759','images/dam/iStock-94979759.jpg','images/thumbnails/iStock-94979759.jpg','images/dam/iStock-94979759.jpg','Seat,Lighting Equipment,Auditorium,Stage,Illuminated,Blue,Architecture,Indoors,Macro,Church,Architecture And Buildings,Architectural Detail','2018-10-18'),
(545,'iStock-680056434','images/dam/iStock-680056434.jpg','images/thumbnails/iStock-680056434.jpg','images/dam/iStock-680056434.jpg','Men,Women,Smiling,Portrait,Party - Social Event,Multi-Ethnic Group,Friendship,Enjoyment,Building Terrace,Celebration,Sunset,Togetherness,Happiness,Arm Around,Sunlight,Carefree,Social Gathering,Laughing,Casual Clothing,Beautiful Woman,Sky,Cheerful,Focus On Foreground,Fun,Illuminated,Bonding,Front View,Recreational Pursuit,Looking At Camera,Decoration,Lighting Equipment,Three Quarter Length,Leisure Activity,Barcelona,Spain,Lifestyles,Outdoors,Three People,25-29 Years,People,Young Adult,Young Women,Young Men,Adults Only,Caucasian Ethnicity,African-American Ethnicity,Latin American And Hispanic Ethnicity,Males,Females,Horizontal','2018-10-18'),
(546,'iStock-683293402','images/dam/iStock-683293402.jpg','images/thumbnails/iStock-683293402.jpg','images/dam/iStock-683293402.jpg','abstract,blur,blurred,bright,counter,desk,table,wood,abstract,apartment,background,blur,blurred,blurry,bokeh,bright,chair,couch,cozy,curtain,cushion,decoration,design,dining,domestic,family,focus,furniture,home,indoor,interior,lamp,light,living,lounge,modern,place,room,sit,sofa,tree,wooden','2018-10-18'),
(547,'iStock-687868152','images/dam/iStock-687868152.jpg','images/thumbnails/iStock-687868152.jpg','images/dam/iStock-687868152.jpg','hotel,interior,lobby,hall,luxury,reception,modern,marble,design,office,floor,architecture,entrance,corridor,decoration,business,style,table,area,elegance,empty,desk,door,decors,building,indoors,space,light,nobody','2018-10-18'),
(548,'iStock-694371702','images/dam/iStock-694371702.jpg','images/thumbnails/iStock-694371702.jpg','images/dam/iStock-694371702.jpg','Party,entertainment,nightlife,nightclub,club,night,cool,urban,modern,rock,band,musicians,performing,stage,gig,garage,man,woman,playing,music,live,concert,success,show,fan,crowd,cheering,jumping,enjoying,raising,hands','2018-10-18'),
(549,'iStock-808175740','images/dam/iStock-808175740.jpg','images/thumbnails/iStock-808175740.jpg','images/dam/iStock-808175740.jpg','keyboard,player,musician,music,synth,synthesizer,instrument,playing,equipment,stripped,jacket,fashion,mood,concept,conceptual,creative,artistic,art,pose,act,acting,performing,performance,style,lifestyle,emotion,emotional,expression,portrait,head,man,adult,human,people,male,beard,casual,soloist,organ,technology,stage,sunglasses,dark,studio,face,facial,hand','2018-10-18'),
(550,'iStock-831902150','images/dam/iStock-831902150.jpg','images/thumbnails/iStock-831902150.jpg','images/dam/iStock-831902150.jpg','','2018-10-18'),
(551,'iStock-841825332','images/dam/iStock-841825332.jpg','images/thumbnails/iStock-841825332.jpg','images/dam/iStock-841825332.jpg','smartphone mockup,smart phone screen,smartphone isolated','2018-10-18'),
(552,'iStock-845955894','images/dam/iStock-845955894.jpg','images/thumbnails/iStock-845955894.jpg','images/dam/iStock-845955894.jpg','','2018-10-18'),
(553,'iStock-851505280','images/dam/iStock-851505280.jpg','images/thumbnails/iStock-851505280.jpg','images/dam/iStock-851505280.jpg','business,woman,businesswoman,young,adult,cafe,drink,tea,coffee,cup,relaxed,restful,leisure,pretty,girl,coffee-break,listening,blonde,song,pleasure,sound,music,1 woman,one woman,earphones,technology,happy,entertainment,smiling,singing,fun,contemporary,mobile,addict,enjoy,playlist','2018-10-18'),
(554,'iStock-852550808','images/dam/iStock-852550808.jpg','images/thumbnails/iStock-852550808.jpg','images/dam/iStock-852550808.jpg','speakers,background,white,isolated,black,box,group,single,power,cut,entertainment,sound,wireless,audio,portable,outdoor,smartphone,board,phone,touchscreen,curved,device,digital,electronic,screen,mobile','2018-10-18'),
(555,'iStock-853128432','images/dam/iStock-853128432.jpg','images/thumbnails/iStock-853128432.jpg','images/dam/iStock-853128432.jpg','','2018-10-18');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
