//
//  AppDelegate.swift
//  TVML-DataBinding
//
//  Created by David Cordero on 11.08.17.
//  Copyright © 2017 David Cordero. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    
    var startTime = Date()
    
    var window: UIWindow?
    var appController: TVApplicationController?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        
        let appControllerContext = TVApplicationControllerContext()
        let appJS = Bundle.main.url(forResource: "application", withExtension: "js")
        
        if let javaScriptURL = appJS {
            appControllerContext.javaScriptApplicationURL = javaScriptURL
        }
        
        appController = TVApplicationController(context: appControllerContext,
                                                window: window,
                                                delegate: self)
        return true
    }
    
    // MARK: TVApplicationControllerDelegate
   
    func appController(_ appController: TVApplicationController, didFinishLaunching options: [String : Any]?) {
        let elapsedTime = Date().timeIntervalSince(startTime)
        print("\(elapsedTime) seconds")
    }
}

