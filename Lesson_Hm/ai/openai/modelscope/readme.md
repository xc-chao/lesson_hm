#  魔塔社区
> 国内最大AI，模型开发平台  
## 大模型 LLM Large(参数规模) Language(语言) Model(模型)
- 输入 ——> code(编程)——> 输出 传统的开发方式
- 输入（prompt）——>LLM(大模型) ——> 输出 最酷的开发方式
- 参数规模单位是？ LLM 训练出来的参数 单位是亿

- 首选大模型
  为了业务，选择合适的大模型
     openai 花费 闭源
     coze 豆包模型，通义千问，kimi 开源的
- 魔塔社区
  - 国内最大的开源大模型社区

- 云端AI环境 
- 机器学习 nlp
- python 的语法
  - module 模块 解决代码的 复用 职责分离
  - from modelscope.pipelines import pipeline
      - modelscope 开源的 大模型社区 提供了pipelines 管道 （nlp管道）开一个管道去做特定的事。
  - from modelscope.utils.constant import Tasks
      - utils 工具  cinstant 常量
      - Tasks 任务

- damo/nlp_structbert_sentiment-classification_chinese-base
  - 模型有很多种，达摩院/情感分析/分类/支持中文 
  - 医疗模型 金融模型 法律模型
  
-  pipeline(Tasks.text_classification,'damo/nlp_structbert_sentiment-classification_chinese-base')
-  pipeline 打开管道
-  选择一项任务 Tasks.text_classification
-  选择模型  'damo/nlp_structbert_sentiment-classification_chinese-base'

    - 模型训练完后就不成长了，新的知识点没有， 不太准确
    - 喂一些数据，并对数据进行标注 微调大模型

- 前后端为什么要学习LLM ？
  - 端模型的时代到来了
    - 小尺寸模型越来越强 AI手机 AI汽车（Robotaxi） AI具身智能
    - Marscode 提高学习和开发效率
    - 很多工作可以交给大模型
      - 输入———> 大模型 ——> 输出  前端 后端

    - LLM 需要算力，来自GPU

- result = p(documents='移动端语音唤醒模型，检测关键词为“小云小云”。模型主体为4层FSMN结构，使用CTC训练准则，参数量750K，适用于移动端设备运行。模型输入为Fbank特征，输出为基于char建模的中文全集token预测，测试工具根据每一帧的预测数据进行后处理得到输入音频的实时检测结果。模型训练采用“basetrain + finetune”的模式，basetrain过程使用大量内部移动端数据，在此基础上，使用1万条设备端录制安静场景“小云小云”数据进行微调，得到最终面向业务的模型。后续用户可在basetrain模型基础上，使用其他关键词数据进行微调，得到新的语音唤醒模型，但暂时未开放模型finetune功能。')