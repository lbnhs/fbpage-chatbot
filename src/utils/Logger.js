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

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// Available Logging Options
	const INFO = 0;
	const NOTICE = 1;
	const WARNING = 2;
	const ERROR = 3;
	const CRITICAL = 4;
	const EMERGENCY = 5;
	const DEBUG = 6;

class Logger {
	constructor(options){		
		if(!options || !options.log_folder || !options.thread_name){
			throw new Error("You need to specify log_folder and thread_name.");
		}
		
		this.log_folder = options.log_folder;
		this.thread_name = options.thread_name + " thread";
		this.debug = options.debug || false;
		this.prefix = options.prefix || "Mr. AI Tonian";
	}
	
	// Writes logs from the disk.
	writeLog(text){
		var date = new Date();	
		fs.appendFile(path.resolve(this.log_folder + "console-" + date.toDateString().split(' ').join('-') + ".log"), text + "\n", (err) => { 
			if(err) { 
				var message = "An error occured while saving the logs: " + err;
				this.writeConsole(this.log(message, ERROR, true));
			}
		});
	}
	
	// Writes logs to the console with colors.
	writeConsole(text){
		console.log(text);
	}
	
	info(message){
		this.writeLog(this.log(message, INFO, false));
		this.writeConsole(this.log(message, INFO, true));
	}
	
	alert(message){
		this.writeLog(this.log(message, ALERT, false));
		this.writeConsole(this.log(message, ALERT, true));
	}
	
	notice(message){
		this.writeLog(this.log(message, NOTICE, false));
		this.writeConsole(this.log(message, NOTICE, true));
	}
	
	error(message){
		this.writeLog(this.log(message, ERROR, false));
		this.writeConsole(this.log(message, ERROR, true));
	}
	
	critical(message){
		this.writeLog(this.log(message, CRITICAL, false));
		this.writeConsole(this.log(message, CRITICAL, true));
	}
	
	emergency(message){
		this.writeLog(this.log(message, EMERGENCY, false));
		this.writeConsole(this.log(message, EMERGENCY, true));
	}
	
	debug(message){
		if(this.debug == false) return;
		this.writeLog(this.log(message, DEBUG, false));
		this.writeConsole(this.log(message, DEBUG, true));
	}
	
	log(text, type, hasColor){
		var date = new Date().toISOString().substring(11,23);
		
		switch(type){
			case INFO:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "INFO]:") + chalk.white(" " + "[" + this.prefix + "] ") + text;
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "INFO]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case NOTICE:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "NOTICE]:") + chalk.cyanBright(" " + "[" + this.prefix + "] " + text);
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "NOTICE]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case WARNING:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "WARNING]:") + chalk.yellow(" " + "[" + this.prefix + "] " + text);
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "WARNING]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case ERROR:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "ERROR]:") + chalk.redBright(" " + "[" + this.prefix + "] " + text);
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "ERROR]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case CRITICAL:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "CRITICAL]:") + chalk.red(" " + "[" + this.prefix + "] ") + text;
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "CRITICAL]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case EMERGENCY:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "EMERGENCY]:") + chalk.redBright(" " + "[" + this.prefix + "] " + text);
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "EMERGENCY]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
			case DEBUG:
				if(hasColor == true){
					return chalk.cyanBright("[" + date + "]") + chalk.gray(" " + "[" + this.thread_name + "/" + "DEBUG]:") + chalk.gray(" " + "[" + this.prefix + "] " + text);
				}else{
					return "[" + date + "]" + " " + "[" + this.thread_name + "/" + "DEBUG]:" + " " + "[" + this.prefix + "] " + text;
				}
				break;
		}
	}
	
	setPrefix(text){
		this.prefix = text;
		return this;
	}
}

module.exports = Logger;