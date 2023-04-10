// 引入echarts
import * as echarts from 'echarts';
import 'echarts-wordcloud'; // 词云图
import romaTheme from '@/assets/theme/roma.json'
import wonderlandTheme from '@/assets/theme/wonderland.json'
import chinaJSON from '@/assets/data/china.json'

// import anhui from '@/assets/data/map/anhui.json'


// console.log(romaTheme);
console.log(chinaJSON);
echarts.registerTheme('roma', romaTheme)
echarts.registerTheme('wonderland', wonderlandTheme)
echarts.registerMap('china', chinaJSON as any)






// export default echarts
