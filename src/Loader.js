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


const BootBot = require('bootbot');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const bot = new BootBot({
	accessToken: process.env.accessToken,
	verifyToken: process.env.verifyToken,
	appSecret: process.env.appSecret
});

const foldersPath = path.join(__dirname, 'modules\/'); // whyy??
const modulesFolders = fs.readdirSync(foldersPath);

/**
 * Modules Handler: Where modules are store and loads in the bot.
 * This ingores non-js files on synchronus file checking.
 */
for (const folder of modulesFolders) {
	const modulesPath = path.join(foldersPath, folder);
	const modulesFiles = fs.readdirSync(modulesPath).filter(file => file.endsWith('.js'));
	for (const file of modulesFiles) {
		const filePath = path.join(modulesPath, file);
		const moduleFile = require(filePath);
		
		bot.module(moduleFile); // Import the module.
	}
}


const Updater = require(__dirname + "\/Updater.js");
const Logger = require(__dirname + "\/Logger.js");
const MainLogger = new Logger({
	log_folder: "./logs/",
	thread_name: "Main", // we're on main thread.
});

function getLogger() {
	if(MainLogger == null){
		throw new Error('MainLogger should be not null.');
	}
	
	return MainLogger;
}

getLogger().info("Starting Mr. AI Tonian...");
getLogger().notice("Running update checker...");

Updater.Check(require('../package.json').version, getLogger());

bot.start(8080); // Run Webhook in Port: 8080

getLogger().notice("The bot has been established!");