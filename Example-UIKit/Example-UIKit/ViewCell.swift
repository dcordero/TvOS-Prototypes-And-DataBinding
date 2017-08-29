//
//  ViewCell.swift
//  Example-UIKit
//
//  Created by David Cordero on 24.08.17.
//  Copyright © 2017 David Cordero. All rights reserved.
//

import UIKit
import SDWebImage

final class ViewCell: UICollectionViewCell {
    
    @IBOutlet private weak var image: UIImageView!
    @IBOutlet private weak var titleLabel: UILabel!
    
    func configure(for viewModel: CatViewModel) {
        guard let imageURL = viewModel.imageURL else { return }
        image.sd_setImage(with: imageURL, completed: nil)
        titleLabel.text = viewModel.title
    }
}
