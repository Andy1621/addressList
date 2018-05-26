## by 某秘密部门501&503

求求甲方不要改需求了

### 界面命名1.0：

1. 公有通讯录群展示页面：community————xzd
2. 查找通讯录群明细页面：searchDetail————xzd
3. 通讯录列表页面（人）：addressList1————lht
4. 查找所有相关信息页面：searchEverything————lkc
5. 创建通讯录界面： createAddressList————lkx
6. 通讯录列表页面（群）：addressList2————lkx
7. 通讯录成员界面：peoplePage————zn
8. 通讯录消息界面：messagePage————zn
9. 消息发布界面：sendMessage————lkc
10. 通知页面：news————lht
11. 我的信息：myInfo————gzy
12. 设置：setting————gzy

### 界面命名2.0：

之前没想到把有些页面会二合一，多写了两个页面，为了方便后面调用，这里改下作出一些修改吧，把之前的通讯录成员和通讯录消息归为一个页面detailPage，把通讯录列表（人）和通讯录列表（群）归为一个页面addressList

1. 公有通讯录群展示页面：community
2. 查找通讯录群明细页面：searchDetail
3. 通讯录列表页面：addressList
4. 查找所有相关信息页面：searchEverything
5. 创建通讯录界面： createAddressList
6. 通讯录群详情界面：detailPage
7. 消息发布界面：sendMessage
8. 通知页面：news
9. 我的信息：myInfo
10. 设置：setting



如何写自己的页面=>在app.json中调整pages中的顺序，将自己要写的页面地址排在首位



### Bug/修改意见，欢迎随时补充

1. 通讯录列表的人和群的样式和community等页面的人和群样式不统一。

![img](file:///C:\Users\81248\Documents\Tencent Files\812487273\Image\C2C\CZJ6@O3Q}@`KK[H$ILS$92L.png) 



![1527337661832](C:\Users\81248\AppData\Local\Temp\1527337661832.png)

2. 搜索的实时文本是否去掉？如果保留，实时文本出现时建议覆盖本来页面。



### .md文件推荐使用Typora打开，十分强大