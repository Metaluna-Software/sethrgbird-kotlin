import * as React from 'react';
import '../style.css';
import Uber from '../images/uber.jpg';
import Lyft from '../images/lyft.png';
import Yt from '../images/yt.jpg';

class Uberxb extends React.Component {
  render() {
    return (
      <div className={'content-section'}>
        <h2 className={'uberxb-heading'}>Thank you for riding in UberXb!</h2>
        <h3 className={'uberxb-heading'}>Referrals</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Uber Driver</h3>
            <h6>For rideshare</h6>
            <a href={'https://www.uber.com/us/en/s/d/join/?invite_code=u2vbsvu2vfuh'}>
              <img src={Uber} alt={'uber image'} className={'seth-tile-img'}/>
            </a>
            <p>Become an Uber driver</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Lyft Driver or Rider</h3>
            <h6>For rideshare</h6>
            <img src={Lyft} alt={'uber image'} className={'seth-tile-img'}/>
            <p>Drive or ride with Lyft and use code: SETH43492</p>
          </div>
          <div className={'col-md-4'}>
            <h3>Youtube Music</h3>
            <h6>For music</h6>
            <a href={'https://youtube.com/premium?cc=r3l5hdcibgp13b'}>
              <img src={Yt} alt={'uber image'} className={'seth-tile-img'}/>
            </a>
            <p>Try YT premium for unlimited music</p>
          </div>
        </div>
        <h3 className={'uberxb-heading'}>Electronics</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Phone charger</h3>
            <h6>For headrest</h6>
            <a href={'https://amzn.to/3XtC4X7'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B089KNLFFT&asins=B089KNLFFT&linkId=8afa27efc682b38d0c8d7c50c8659ad6&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Dashcam</h3>
            <h6>For windshield</h6>
            <a href={'https://amzn.to/3kaXTME'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B097J14HHG&asins=B097J14HHG&linkId=f2705dd9d07c95bec475cc61aa110bfb&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>LED Light</h3>
            <h6>For back window</h6>
            <a href={'https://amzn.to/3X8bfYA'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B09XTFDCJH&asins=B09XTFDCJH&linkId=10bb478eb2c90eb9450efcb0839205a9&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Car stereo</h3>
            <h6>For dash</h6>
            <a href={'https://amzn.to/3QAdPEr'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0B5SWYN6D&asins=B0B5SWYN6D&linkId=a7b70c63f03d35ec7d311c2d29d07e16&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Uber light</h3>
            <h6>For windshield</h6>
            <a href={'https://amzn.to/3ZtqIUI'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0BMVHQ4SH&asins=B0BMVHQ4SH&linkId=6e01386a31a7c741003c423e86b98c28&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Air Purifier</h3>
            <h6>For front cupholder</h6>
            <a href={'https://amzn.to/3QCxXWu'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B08NCSZGCN&asins=B08NCSZGCN&linkId=05c95e66b4750f59a0c1fab66fd77b5f&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
        </div>
        <h3 className={'uberxb-heading'}>Consumables</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Snacks</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3Gxjial'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0872ZMXBG&asins=B0872ZMXBG&linkId=2a7a2a321dce1855193e9533c457a5f9&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Kleenex</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3GUnHV9'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B006UGV5P2&asins=B006UGV5P2&linkId=0cd69a289ce92856a748e015ed8f2e32&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Snacks</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3vXlYJC'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B001NSU8PU&asins=B001NSU8PU&linkId=5ccddd08d4a878d169be44be0b194a46&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Snacks</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3CGPyXi'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B06XS6WNWW&asins=B06XS6WNWW&linkId=cc5611d9d590112e75e684eff7a67dc4&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Snacks</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3vXqqYI'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07VY8GFQZ&asins=B07VY8GFQZ&linkId=f4b227918b115c5272e6944dd20ef3ef&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Emesis bags</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3iAfMEb'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07V813VMY&asins=B07V813VMY&linkId=609e6c702e32d8dad8337d3c55705dee&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Tic Tacs</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3ICWSal'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07F2RW9ST&asins=B07F2RW9ST&linkId=4de3df14d3372769f2d37e1a5db7ec4f&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Gum</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3CGK2Em'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B08NZNPZS8&asins=B08NZNPZS8&linkId=7c5d521f5c784a127937ee13460dc1e4&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Hand Sanitizer Gel</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3CIKYI5'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B01G1KP8C2&asins=B01G1KP8C2&linkId=87e08f421a9e24f72e03495b59c710cf&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Acetaminophen</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3W3YxJ4'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B087D3SML2&asins=B087D3SML2&linkId=6d8562fc16729bb1ff93ae8d0ce5dda5&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Snacks</h3>
            <h6>For pocket pouches</h6>
            <a href={'https://amzn.to/3W5YOvd'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B001682ULC&asins=B001682ULC&linkId=fc3175d497cd5cdbb932c05b47729c2a&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
        </div>
        {/* End Supplies */}
        <h3 className={'uberxb-heading'}>Decor</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Fairy LED lights</h3>
            <h6>For ceiling</h6>
            <a href={'https://amzn.to/3W63xgm'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B077VQ5P3V&asins=B077VQ5P3V&linkId=5184fe51baf03dc018bfc05b1edb2f56&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Velcro</h3>
            <h6>For ceiling labels</h6>
            <a href={'https://amzn.to/3CHU6N5'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B00006IC2U&asins=B00006IC2U&linkId=1fa72de777eb3866978b735ef767617b&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Labels</h3>
            <h6>For ceiling</h6>
            <a href={'https://amzn.to/3VZAlr7'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0BLG5YPLV&asins=B0BLG5YPLV&linkId=24aa7f3a379ded0954e1e17c7311c43c&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
        </div>
        {/* End Decor */}
        <h3 className={'uberxb-heading'}>Tools or Accessories</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>SD Card</h3>
            <h6>For dashcam</h6>
            <a href={'https://amzn.to/3W2S551'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B08GY8NHF2&asins=B08GY8NHF2&linkId=8736edb526221a0ee3197b138b665da3&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>USB for AA lights</h3>
            <h6>For lights</h6>
            <a href={'https://amzn.to/3XlJAmG'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0861VM3VM&asins=B0861VM3VM&linkId=163d08e95c95770402fb600b1863b596&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Extension USB</h3>
            <h6>For lights</h6>
            <a href={'https://amzn.to/3ZtJnja'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B0B5Q5QVQG&asins=B0B5Q5QVQG&linkId=60e19356d0e924415e0b2e69fdf1f1e9&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>12v hub</h3>
            <h6>For lights</h6>
            <a href={'https://amzn.to/3k6fJ3k'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B09G6D11PX&asins=B09G6D11PX&linkId=9ce53c5a4018876ae40b7d9b65fa16fe&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Tools</h3>
            <h6>For installing stereo and running wires</h6>
            <a href={'https://amzn.to/3WWOQ0h'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B09M3T7R4H&asins=B09M3T7R4H&linkId=943720d846e0e016fa6574ab81b78e08&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Phone mount</h3>
            <h6>For mirror</h6>
            <a href={'https://amzn.to/3GY57fI'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B09N6LDBS8&asins=B09N6LDBS8&linkId=2d017f1f7c399870f81614c5768fe7de&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Armrest pads</h3>
            <h6>For armrests</h6>
            <a href={'https://amzn.to/3GYRGMQ'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B004W0QISM&asins=B004W0QISM&linkId=62199aaed35b57bdfcb74773f187216e&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Pocket Pouches</h3>
            <h6>For seat back</h6>
            <a href={'https://amzn.to/3QxaDsS'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B01D3CMC0C&asins=B01D3CMC0C&linkId=01b90bee9d8f62b58c1055977f1c07b7&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Floor mats</h3>
            <h6>For floor</h6>
            <a href={'https://amzn.to/3W5ZoJp'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07RYNY7DK&asins=B07RYNY7DK&linkId=0c31546f2ee174bddb5910a586225864&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>SD card reader</h3>
            <h6>For dashcam</h6>
            <a href={'https://amzn.to/3GZ1W7N'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07D1J88CF&asins=B07D1J88CF&linkId=f4560031858ccc4cd875c575bea7dc06&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
        </div>
        {/* End Tools */}
        <h3 className={'uberxb-heading'}>Cleaning</h3>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <h3>Fabric refresher</h3>
            <h6>For odor removing</h6>
            <a href={'https://amzn.to/3GZ23QL'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B01GQ9SZJ6&asins=B01GQ9SZJ6&linkId=e2885c391d2e5aa45b6b8f30d09d5387&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Disinfecting Wipes</h3>
            <h6>For cleaning</h6>
            <a href={'https://amzn.to/3W47YrS'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07567TGZ2&asins=B07567TGZ2&linkId=24984d67c0b77ee64d00928793414412&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Fabric cleaner</h3>
            <h6>For stain removing</h6>
            <a href={'https://amzn.to/3GVseaW'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B00006IV1V&asins=B00006IV1V&linkId=fab5912194f72b140dea70c9d0702bc3&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
          <div className={'col-md-4'}>
            <h3>Brush</h3>
            <h6>For fabric cleaner</h6>
            <a href={'https://amzn.to/3GBrrdI'}>Shop</a>
            <p>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                      className={'amazon-iframe'}
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=uberxb-20&language=en_US&marketplace=amazon&region=US&placement=B07GZRCHCS&asins=B07GZRCHCS&linkId=e12cb9fec236cb3b8972de431f9cffb4&show_border=true&link_opens_in_new_window=true"></iframe>
            </p>
          </div>
        </div>
        {/* End Cleaning */}
      </div>
    );
  }
}

export default Uberxb;
