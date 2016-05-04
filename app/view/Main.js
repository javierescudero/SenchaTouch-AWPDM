Ext.define('practicaSencha.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        items: [
            {
                dock:'top',
                xtype:'titlebar',
                title:'HOLA',
                style:'background:"#ff0000'
            },
            {
                html:"Mi primera aplicacion<b> Sencha touch <b>",
                styleHtmlContent:true
            }
        ]
    }
});
