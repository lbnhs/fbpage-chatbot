'use strict';

/**
 * Facebook Page Chatbot - Mr. AI Tonian
 *
 * Copyright by @LBNHS (Lawang Bato National High School) <https://github.com/lbnhs> (c) 2023
 *
 * An fast client, secure, efficient, and feature-rich AI-based 
 * facebook page chat-bot system for lakestonians for fast communicating
 * and auto-messaging system made in Javascript and NodeJS.
 * - If you encourted any bugs or issue, kindly create an issue, 
 *   and wait for response of the developers.
 * - You can also create an issue for any bot enchancements, 
 * 	 and suggesstion, and our developers will kindly review.
 * - We are open for contributors who want to help us to improve 
 *   our chat-bot system, these are intellegently reviewed by our school 
 *   developers and program developers.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by 
 * the Free Software Foundation, either version 3 of the License, or (at your option)
 * any later version. This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

module.exports = (bot) => {
	bot.on('postback:SCHOOL_INFORMATION', (payload, chat) => {
		const buttons = [
			{ type: 'postback', title: 'School Address', payload: 'SCHOOL_ADDRESS' },
			{ type: 'postback', title: 'School Directory', payload: 'SCHOOL_DIRECTORY' },
			{ type: 'postback', title: 'School Regulations', payload: 'SCHOOL_REGULATIONS' }
		];
		chat.sendButtonTemplate(`Choose what topic is your concern below:`, buttons);
	});
	
	bot.on('postback:SCHOOL_ADDRESS', (payload, chat) => {
		const buttons = [
			{ type: 'web_url', title: 'Google Map', url: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FLawang%2BBato%2BNational%2BHigh%2BSchool%2C%2BValenzuela%2C%2BMetro%2BManila%2F%4014.7294276%2C120.9938561%2C18z%2Fdata%3D!4m6!3m5!1s0x3397b17f71f6fd1b%3A0x3442c8fb7481b19a!8m2!3d14.7296792!4d120.9938066!16s%252Fm%252F06zknph%3Ffbclid%3DIwAR0j4RSZDTRBZrqvsSGB10-UdnL7rkaGU4fRiWX8FeX9jUbKl1wRIzV-BbE&h=AT0yEREfPiRsYoZjSxyClgvZOBjEX1pVMGzFkuSouTNBSiLZ8zJ1O38YkGeIEoJSE2iXq08a_DjuxjRMVqWbu59HUtP08J3kSOxsLiefzz5dGOjwr9YZKiTMRT8mla5e8nkhLg' }
		];
		chat.sendButtonTemplate(`The school location address of Lawang Bato National School is on:\n\nMULAWINAN ST., LAWANG BATO, VALENZUELA CITY\n\nYou can click this button below to open the Google Maps to start navigating the school:`, buttons);
	});
	
	bot.on('postback:SCHOOL_DIRECTORY', (payload, chat) => {
		// Updating every school year changes..
		chat.say(`These is the school directory of Lawang Bato National High School as of SY. 2023-2024:\n\nADMIN DEPARTMENT\nDr. Jonathan O. Lagdamen - Principal IV\nHazel M. Arellano - Assistant Principal SHS\nMarcela M. Pabunan - Assistant Principal JHS\nDerick Josef V. Dilla - Guidance Coordinator\nLoyd C. San Andres - School Clerk\n\nHEAD TEACHERS\nEdwin J. Bonifacio -  Filipino\nMarcela M. Pabunan -  AP\nMa. Therese C. Dinong -  Math\nMelinda P. Orenza - Science\nEditha R. Quibin - Tle\nLina Q. De Asis -  ESP\nArlene F. Sanz -  English\nRosana T. Soldevilla -  MAPEH`);
	});
	
	bot.on('postback:SCHOOL_REGULATIONS', (payload, chat) => {
		// Update soon?
		chat.say(`These are the school regulations must be AVOID while in-class:\n\n• Cutting of classes and tardiness\n• Failure to wear prescribed uniform\n• Wearing of earrings for the boys and more than a pair of earrings for the girls, outlandish hairstyles, painting of tattoo, over accessories and body piercing\n• Loitering and staying inside or outside the school during class hour\n• Spitting elsewhere\n• Bullying including physical, emotional, mental and cyber-bullying\n• No shorts allowed\n• Coloured shirt is not allowed\n• No slippers allowed\n• No vaping\n• No smoking\n\nSo far, these are the basic regulations in Lawang Bato National High School. If you want to talk or ask for concern, you may type your questions below, and our staff's will reply in a couple of days.`);
	});
}