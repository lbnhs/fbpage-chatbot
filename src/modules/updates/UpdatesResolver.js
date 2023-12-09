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
 
const MainDataHandler = require("../../utils/DataHandler.js")
const path = require("path")

module.exports = (bot) => {
	
	bot.on('postback:SCHOOL_UPDATES', (payload, chat) => {
		const buttons = [
			{ type: 'postback', title: 'Club Events', payload: 'CLUB_EVENTS' },
			{ type: 'postback', title: 'School Updates', payload: 'SCHOOL_PROGRAMS' },
			{ type: 'postback', title: 'SSLG Programs', payload: 'SSLG_PROGRAMS' }
		];
		chat.sendButtonTemplate("Choose topics below do you want to see:", buttons);
	});
	
	
}