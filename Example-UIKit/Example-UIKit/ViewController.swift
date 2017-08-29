//
//  ViewController.swift
//  Example-UIKit
//
//  Created by David Cordero on 21.08.17.
//  Copyright © 2017 David Cordero. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UICollectionViewDataSource {

    var catCodes = ["100", "200", "300", "400", "500"]
    
    @IBOutlet private weak var collectionView: UICollectionView!
    
    // MARK: UICollectionViewDataSource
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 45000
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "ViewCell", for: indexPath) as! ViewCell
        
        let currentCat = catCodes[indexPath.row % catCodes.count];
        cell.configure(for: viewModel(from: currentCat))
        
        return cell
    }
    
    // MARK: Private
    
    private func viewModel(from catCode: String) -> CatViewModel {
        return CatViewModel(imageURL: URL(string: "https://http.cat/\(catCode)"),
                            title: catCode)
    }
}
