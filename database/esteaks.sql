-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 16, 2020 at 11:42 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esteaks`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` text COLLATE utf8_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'American Wagyu Ribeye', 1999, './images/ribeye.jpg', 'Wagyu crossed with high quality Angus\r\n100% natural, no added hormones\r\nWet-aged 21+ days for improved flavor and texture\r\nHand cut by a master butcher', 'Cut from our American Wagyu beef graded at 9 or more on the Japanese Beef Marbling Scale (BMS), the Gold Grade ribeye could be our most magnificent steak. Each ribeye includes the rare cap section and has the traditional flavor favored by American palates combined with the rich buttery essence of Japanese Wagyu. Supplies of this spectacular steak are limited.'),
(2, 'American Wagyu New York Strip', 1499, './images/newyork.jpg', 'Leaving the bone intact in our American Wagyu New York strip minimizes moisture loss since there is less meat exposed to the heat and produces a finished product that is tender and juicy.', 'Heritage Farms dry-aged beef represents a higher echelon for our American Wagyu steaks. To achieve these extraordinary results, we utilize a proprietary system which controls and measures each step of dry-aging. Our partner, Prime Food Distributor, has developed a proprietary process which methodically controls all environmental factors so our American Wagyu beef ages slowly, peacefully and as undisturbed as possible. The finished product is the pure essence of beef with an extremely tender texture, a rich buttery aroma and an intense beef flavor.'),
(3, 'American Wagyu Filet Mignon', 2499, './images/filet.jpg', 'Our Gold Grade tenderloin steak is the ultimate filet mignon. Gold Grade steaks represent the highest level of marbling offered by Heritage Farms. ', 'Our Gold Grade tenderloin steak is the ultimate filet mignon. Gold Grade steaks represent the highest level of marbling offered by Heritage Farms. These filets are available in limited quantities and maintain the traditional flavor that American palates love combined with the tender, buttery essence of Japanese Wagyu beef. The filet mignon is the number one selling Gold Grade steak for good reason: it is even more buttery textured than our Black Grade filet mignon. This filet is so tender and juicy it can be cut with a butter knife.'),
(4, 'American Wagyu Porterhouse', 2299, './images/tbone.jpg', 'The Snake River Farms American Wagyu porterhouse is a classic steak featuring a flavorful New York strip and a tender filet mignon separated with a T-shaped bone. ', 'Heritage Farms dry aged beef represents a higher echelon for our American Wagyu steaks. Our partner, Prime Food Distributor, developed a proprietary method with strict protocols and quantifiable performance standards at every stage of the dry-aging process. When our beef is received, it is measured and tagged so it can be tracked electronically from start to finish. Large sub primal cuts are aged in a meticulously controlled dry aging environment for a minimum of 45 days. When perfectly aged, our beef is hand cut into generous steaks and shipped fresh to your door using Expedited Shipping. You will receive a porterhouse of the highest order with a distinctive buttery aroma and an intense beef flavor unique to our dry aged steaks. \r\n\r\nAt this time, we unfortunately cannot accept promo codes on dry aged orders.'),
(5, 'American Wagyu Beef Short Rib', 1999, './images/beefrib.jpg', 'Our American Wagyu Short Ribs are Plate Short Ribs (NAMP 123A series for you beef experts) are sourced from the plate primal located below the ribs.', 'Heritage Farms short ribs are 7 pounds of rich, delectable beef. Short ribs were one of the most requested items from our customers and we wanted to offer an American Wagyu version in a big way, quite literally. \r\n\r\nEach package now contains a 3 bone slab that can be prepared as fancy or simple as you would like. Try them long cooked in the classic French dish, seasoned with Korean spices or slow smoked barbecue style. No matter how you cook them, these giant American Wagyu beauties will be part of a memorable feast.'),
(6, 'American Wagyu Picanha', 1899, './images/picanha.jpg', 'Sourced from the sirloin cap, the picanha has a tender sirloin steak texture and rich, juicy beef flavor.\r\n', 'The picanha (also know as the coulotte or coulotte steak) is a hard to find cut of beef that is well worth the search. It is triangular in shape and considered to be the most delectable meats for the grill in Brazilian steakhouses. Sourced from the sirloin cap, the picanha has a tender sirloin steak texture and rich, juicy beef flavor. We have left the fat cap intact to gently bathe the meat with its savory essence and keep the meat moist and tender.\r\n\r\n\r\nOf course, the Heritage Farms picanha adds the intense marbling of an American Wagyu to create an exceptional eating experience. Roast our picanha whole or cut thick slices against grain to make outstanding culotte steaks. No matter how you serve this uncommon cut you will love its distinctive flavor and delicious complexity.'),
(7, 'American Wagyu Outside Skirt Steak', 1499, './images/skirtsteak.jpg', 'Outside Skirt Steak is a near legendary cut of beef that is distinctly grained and rich in abundant beef flavor.', 'Outside Skirt Steak is a near legendary cut of beef that is distinctly grained and rich in abundant beef flavor. Our American Wagyu Outside Skirt Steak is deeply marbled so it bastes itself with flavor when heated. This is an easy to prepare steak, but it is important to cook quickly on high heat and slice against the grain. This is the traditional cut for fajitas and is hard to find since it generally goes straight to restaurants. Outside Skirt Steak is one of our top choices for grilling at home seasoning with just salt & pepper or with a simple marinade like carne asada.'),
(8, 'American Wagyu Tomahawk Steak', 2599, './images/tomahawk.jpg', 'Each hand-cut beauty is a richly marbled, full ribeye steak attached to a long, exposed bone. Each steak is the width of a rib bone which results in a generous cut about 2\" thick. ', 'Many consider our American Wagyu tomahawk the Ultimate Steak. A deeply marbled ribeye with a long, exposed rib bone is the star of many Instagram photos. Each of our tomahawk steaks is hand cut to a thickness of about two inches. We have found a way to make this exclusive cut, even more elite by adding the element of dry aging.\r\n\r\nHeritage Farms dry aged beef represents a higher echelon for our American Wagyu steaks. To achieve these extraordinary results, we utilize a proprietary system which controls and measures each step of the dry aging process. Our partner, Prime Food Distributor, is vigilant about all factors from beginning to end. Lighting, airflow, humidity, temperature and cleanliness are carefully controlled to create an environment where produces the purest essence of beef. The outcome is a rich, full flavored steak which provides a unique, pure eating experience.'),
(9, 'American Wagyu Prime Rib', 2999, './images/primerib.jpg', 'The Heritage Farms Gold Grade bone-in prime rib roast is an exceptional roast, boasting the highest level of marbling offered in our line of impressive American Wagyu prime ribs.', 'The Heritage Farms Gold Grade bone in prime rib roast is an exceptional roast, boasting the highest level of marbling offered in our line of impressive American Wagyu prime ribs. To add to the spectacular nature of this special cut, we have left the bones in place to achieve aesthetic and culinary benefits. This bone in prime rib makes holidays and special occasions more memorable with its dramatic appearance and deep, robust flavor. Each Gold Grade roast is hand selected and hand cut from the our top graded ribeye sections to include prized cap and rich center eye. This is a monumental prime rib reserved for those who appreciate the finest American Wagyu beef available. \r\n\r\nDue to the unique conformations of this product, approximate weights can vary up to 0.5 pounds.   ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
