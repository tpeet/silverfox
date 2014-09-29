CSS muudatused (menüü linkidelt ülevalt kollase riba kaotamine, kaardi infokasti parandus, kerimisriba muudatus) said sisse viidud Avada teema seadetes Custom CSS all (sinna lisatud kood on nähtav [siin](https://github.com/tpeet/silverfox/blob/master/custom.css))

Kaardi infokasti parandused ja "Learn more" tekstid ühele kõrgusele saamiseks tehtud parandused on lisatud [/wp-content/themes/Avada/js/custom.js](https://github.com/tpeet/silverfox/blob/master/wp-content/themes/Avada/js/custom.js) faili.

Sticky headeri muudatused tuli teha otse olemasolevasse main.js faili, mis tähendab, et kui uuendada Avada theme'i, siis võib juhtuda, et muudatused lähevad kaotsi. Tehtud muudatused on nähtavad [siin](https://github.com/tpeet/silverfox/commit/dd41844511091b654e7cfc37c5b35eb301043987#diff-37cb88bf473d711b7a01db1ed5c298e5), mis tuleks vajadusel sisse viia ka pärast theme-i uuendust.

Sarnaselt eelnevale, võivad fusion-core plugini uuendusega kaotsi minna ka testimonalsi muudatused. Pärast uuendust tuleks vajadusel sisse viia sellised muudatused nagu näha [siin](https://github.com/tpeet/silverfox/commit/dd41844511091b654e7cfc37c5b35eb301043987#diff-b7ee4d6e92d4cd129ff4fcfcf3c6a7d0).

Ülejäänud uuendused ja muudatused ei tohiks minu tehtud muudatusi enam kuidagi mõjutada
