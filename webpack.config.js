//webpack.config.js
var path            =   require("path");
var webpack     =   require("webpack");

module.exports={

    //入口
	entry: {
		todo :   "./app/index.jsx"
	},

    //输出
	output: {
		path        :   __dirname + '/out/',   					            
		filename    :   "[name].js",
		publicPath  :   '/out/'
	},

	//大于8KB的图片不会被打包
	//在对模块捆绑打包的过程中会对文件的后缀名进行检测，然后进行相应的预处理
	module: {
	          loaders: [
                    { test: /\.jsx$/,loader: 'babel', query: {presets: ['react', 'es2015']} },
		            { test: /\.js$/, loader: "babel", query: {presets: ['es2015']} },
		            { test: /\.css$/, loader: "style!css" },
		            { test: /\.(jpg|png|otf)$/, loader: "url?limit=8192" }
	          ]
    	},
    	resolve: {
        		extensions: ['', '.js', '.jsx']    					        //后缀省略
    	},
    	plugins: [
		    new webpack.optimize.CommonsChunkPlugin('common.js')		    //提取代码公共部分
	    ]
};