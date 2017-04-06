'use strict'

var gulp = require('gulp');
var webdriver_update = require('gulp-protractor').webdriver_update;
var protractor = require('gulp-protractor').protractor;
var fs = require('fs-extra');
var mkdirp = require('mkdirp');
var del = require('del');
var cucumber = require('gulp-protractor');
var reporter = require('gulp-protractor-cucumber-html-report');

	//Functions for Report Generation
	function generateProtractorHtmlReport(){
		return gulp.src('e2e/reports/json/cucumber-test-results.json')
			.pipe(reporter({
				dest: 'e2e/reports'
			}));
	};

	function cleanProtractorReports(done){
		if (fs.existsSync('./reports')){
			del('e2e/reports', done);
		} else {
			mkdirp('e2e/reports');
		}
	};

	function e2e_Regression(){
		return gulp.src('./e2e/features/*.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function gittest(){
		return gulp.src('./features/*.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js',
        args: [
            '--baseUrl', 'https://github.com/'
        ]
			}))
	};

	function fbtest(){
		return gulp.src('./features/*.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js',
        args: [
            '--baseUrl', 'https://en-gb.facebook.com/'
        ]
			}))
	};

	function properangulartest(){
		return gulp.src('./features/*.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js',
        args: [
            '--baseUrl', 'https://www.wowcher.co.uk/'
        ]
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function login(){
		return gulp.src('./e2e/features/login.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function registration(){
		return gulp.src('./e2e/features/registration.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function subscription(){
		return gulp.src('./e2e/features/subscription.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function payments(){
		return gulp.src('./e2e/features/payment.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function myAccount(){
		return gulp.src('./e2e/features/MyAccount.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function search(){
		return gulp.src('./e2e/features/Search.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			/*.on('error', function (err){
				console.log(err);
				throw new Error('Error Occurred');
			})*/
			.on('end', callback);

	};

	function storefront(){
		return gulp.src('./e2e/features/storefront.feature')
			.pipe(protractor({
				configFile: 'protractor.conf.js'
			}))
			.on('error', function (err){
				console.log(err);
				throw err;
			});
	};

	function travel(){
    	return gulp.src('./e2e/features/Travel.feature')
        	.pipe(protractor({
         	   configFile: 'protractor.conf.js'
        	}))
        	.on('error', function (err){
         	   console.log(err);
         	   throw err;
        	});
	};

	function sitemap(){
    	return gulp.src('./e2e/features/Sitemap.feature')
     	   .pipe(protractor({
       	     configFile: 'protractor.conf.js'
      	  }))
      	  .on('error', function (err){
      	      console.log(err);
      	      throw err;
      	  });
	};

	function exitProcess(){
		process.exit(0);
	};

	//Report generation tasks - called from command line
	gulp.task('properangulartest', properangulartest);
	gulp.task('gittest', gittest);
	gulp.task('fbtest', fbtest);
	gulp.task('protractor-report', generateProtractorHtmlReport);
	gulp.task('clean-protractor-report', cleanProtractorReports);
	gulp.task('protractor', e2e_Regression);
	gulp.task('protractorLogin', login);
	gulp.task('protractorRegistration', registration);
	gulp.task('protractorSubscription', subscription);
	gulp.task('protractorPayments', payments);
	gulp.task('protractorMyAccount', myAccount);
	gulp.task('protractorSearch', search);
	gulp.task('protractorStorefront', storefront);
	gulp.task('protractorTravel', travel);
	gulp.task('protractorSitemap', storefront);
	gulp.task('regression', ['protractor'], generateProtractorHtmlReport);
	gulp.task('login', ['protractorLogin'], generateProtractorHtmlReport);
	gulp.task('registration', ['protractorRegistration'], generateProtractorHtmlReport);
	gulp.task('subscription', ['protractorSubscription'], generateProtractorHtmlReport);
	gulp.task('payments', ['protractorPayments'], generateProtractorHtmlReport);
	gulp.task('myaccount', ['protractorMyAccount'], generateProtractorHtmlReport);
	gulp.task('search', ['protractorSearch'], generateProtractorHtmlReport);
	gulp.task('storefront', ['protractorStorefront'], generateProtractorHtmlReport);
	gulp.task('travel', ['protractorTravel'], generateProtractorHtmlReport);
	gulp.task('sitemap', ['protractorSitemap'], generateProtractorHtmlReport);