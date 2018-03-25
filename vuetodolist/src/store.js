const STORAGE_KEY='todos-vuejs'
export default{
	fetch:function(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||"[]");
	},
	save:function(iterms){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(iterms));
	},
	GetItermsNo:function(){
		if(localStorage.getItem(STORAGE_KEY)==null)
		{
			return 0;
		}
		return JSON.parse(JSON.parse(localStorage.getItem(STORAGE_KEY)).length);
	},
	Deleteli:function(iterm){
		var iterms=JSON.parse(window.localStorage.getItem(STORAGE_KEY)||"[]");
		var i=0;
		while(i<iterms.length){
			if(iterms[i].local==iterm.local&&iterms[i].isFinished==iterm.isFinished){
				iterms.splice(i,1);
				break;
			}
			i++;
		}
		//iterms.remove(iterms.length);
		window.localStorage.removeItem(STORAGE_KEY);
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(iterms));
		return iterms;
	}
}