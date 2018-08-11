import React from 'react'

import styles from './styles.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.column}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet erat ut turpis consequat imperdiet at mollis felis. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Cras venenatis consectetur orci a accumsan. In fermentum sollicitudin
        elementum. Nulla facilisi. Donec congue a arcu sit amet iaculis. Fusce
        tempor pharetra nibh non iaculis. Donec dictum dolor orci, nec facilisis
        est aliquam sed. Aliquam eleifend, risus in malesuada imperdiet, est
        justo hendrerit sem, vitae pharetra lorem libero et tortor. Maecenas
        vestibulum, est vitae venenatis pulvinar, lectus nulla luctus elit, quis
        consectetur risus est et neque.
      </p>
      <p>
        Cras sem augue, imperdiet in lobortis ullamcorper, fermentum imperdiet
        arcu. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Morbi quis efficitur mi. Pellentesque at nulla
        dictum, tempor odio non, posuere elit. Aenean efficitur volutpat ex eu
        congue. Mauris ut lectus non ex laoreet elementum. Duis elementum
        pharetra maximus. Aliquam fermentum placerat est in accumsan. Morbi in
        justo at risus faucibus posuere. Ut tempus, ligula euismod mollis
        volutpat, ipsum lacus facilisis urna, eu dictum purus sem eget orci.
        Mauris nec nunc sed ex viverra rutrum nec vel ligula. Quisque non magna
        arcu. Maecenas hendrerit risus at lectus egestas, et consequat dui
        egestas.
      </p>
      <p>
        Etiam non placerat nulla. Ut vulputate arcu nisl, et condimentum risus
        cursus vel. Suspendisse vestibulum mauris et nisl egestas, non sagittis
        odio malesuada. Curabitur sed gravida orci, non fermentum odio. Proin
        euismod urna nisl, id viverra eros aliquam dapibus. Praesent molestie
        augue iaculis feugiat sagittis. Fusce sit amet egestas neque, in
        bibendum felis. Maecenas vel velit cursus, gravida tellus a, sagittis
        ipsum. Nunc dapibus tristique interdum. Fusce at purus magna.
      </p>
      <p>
        Etiam non placerat nulla. Ut vulputate arcu nisl, et condimentum risus
        cursus vel. Suspendisse vestibulum mauris et nisl egestas, non sagittis
        odio malesuada. Curabitur sed gravida orci, non fermentum odio. Proin
        euismod urna nisl, id viverra eros aliquam dapibus. Praesent molestie
        augue iaculis feugiat sagittis. Fusce sit amet egestas neque, in
        bibendum felis. Maecenas vel velit cursus, gravida tellus a, sagittis
        ipsum. Nunc dapibus tristique interdum. Fusce at purus magna.
      </p>
    </div>
    <div className={styles.column}>
      <p>
        Nullam eget ipsum id velit tempus tincidunt. Phasellus tincidunt turpis
        at pulvinar condimentum. Quisque viverra pulvinar quam eu fringilla.
        Duis convallis auctor tellus in dignissim. Aenean ornare ipsum quis
        hendrerit faucibus. Nullam finibus justo nunc, et egestas dui tristique
        eu. Vestibulum imperdiet metus sit amet est aliquam, a consectetur nisl
        accumsan. Quisque placerat nibh iaculis hendrerit commodo. Quisque
        euismod sapien nec augue dapibus faucibus. Suspendisse placerat massa
        magna, vel viverra libero sollicitudin at. Nunc tincidunt finibus metus,
        ut iaculis tellus gravida quis. Vivamus posuere cursus orci, et rutrum
        elit lobortis sit amet. Suspendisse interdum fermentum lorem quis
        lobortis.
      </p>
      <p>
        Integer vel iaculis tortor. Nullam pretium malesuada justo eget sodales.
        Aenean at orci lacinia massa volutpat volutpat. Nam a condimentum velit,
        non finibus eros. Morbi maximus, leo ut gravida faucibus, orci neque
        faucibus mauris, in placerat velit lorem eu purus. Aenean commodo purus
        urna, sit amet efficitur dolor tincidunt sed. Pellentesque feugiat ipsum
        eros, sed laoreet nulla maximus a. Aenean in consectetur est.
      </p>
      <p>
        Etiam non placerat nulla. Ut vulputate arcu nisl, et condimentum risus
        cursus vel. Suspendisse vestibulum mauris et nisl egestas, non sagittis
        odio malesuada. Curabitur sed gravida orci, non fermentum odio. Proin
        euismod urna nisl, id viverra eros aliquam dapibus. Praesent molestie
        augue iaculis feugiat sagittis. Fusce sit amet egestas neque, in
        bibendum felis. Maecenas vel velit cursus, gravida tellus a, sagittis
        ipsum. Nunc dapibus tristique interdum. Fusce at purus magna.
      </p>
      <div className={styles.links}>
        <a href="/" className={styles.link}>
          Terms & Conditions
        </a>
        <a href="/" className={styles.link}>
          Disclosure Library
        </a>
        <a href="/" className={styles.link}>
          Contact Us
        </a>
        <a href="/" className={styles.link}>
          FAQ
        </a>
      </div>
      <p>© 2018 TokenDATA. All rights reserved.</p>
      <div className={styles.social}>
        <img
          alt="linkedin"
          className={styles.socialLink}
          src={require('../../images/social/linkedin.svg')}
        />
        <img
          alt="facebook"
          className={styles.socialLink}
          src={require('../../images/social/facebook.svg')}
        />
        <img
          alt="twitter"
          className={styles.socialLink}
          src={require('../../images/social/twitter.svg')}
        />
        <img
          alt="slack"
          className={styles.socialLink}
          src={require('../../images/social/slack.svg')}
        />
        <img
          alt="telegram"
          className={styles.socialLink}
          src={require('../../images/social/telegram.svg')}
        />
        <img
          alt="wechat"
          className={styles.socialLink}
          src={require('../../images/social/wechat.svg')}
        />
      </div>
    </div>
  </div>
)

export default Footer
