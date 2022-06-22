# moui

vue 组件库

#### 1. m-button (按钮）

属性值：

- type（类型）：字符串    （默认default， 其他值：success、error、 warning、 info）
- plaIn(不变的的按钮)：Boolean （默认 false）
- round(圆角)：Boolean（默认 false）
- circle(圆)：Boolean（默认 false）
- disabled(禁止状态)：Boolean（默认 false）

#### 2. m-border (边框）

属性值：

- type（类型）：字符串  （默认none（无边框）， 其他值：solid（直线）、dashed（虚线））
- radius（圆角）：字符串（默认none（无圆角）， 其他值：small（4px）、large（8px）、round（20px））
- shadow（阴影）：字符串  （默认none， 其他值：basic、light、dark）

#### 3. m-containu（容器）

属性值：

- type（类型）：字符串（默认值default， 其他值：primary）

  > default 值效果

  ![image-20220531150255227](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20220531150255227.png)

  > primary 值效果

  ![image-20220531150355863](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20220531150355863.png)



#### 4. m-pagenation（分页）

方法：

- currentChange（点击分页的上、下一页的按钮，以及具体分页的回调）：function（val  =>  val参数（页码）

属性值：

- currentPage（类型）：number  （默认1）

- total（数据总数）：number

- pageSize（每页数据数量）：number

- showPageNo（分页两个省略号之间的值数量）：number

  


#### 5.  m-tabs

属性： 

- value： 选项卡默认展示项【name属性的值】----（string）： 默认为“ ”；

- stretch： 选项卡按钮是否自动撑开  -----（boolean）: 默认为 false;

- closable: 选项卡是否显示可取消按钮 ----- （boolean）: 默认为 false;

- type： 选项卡的风格类型 ---- （string)  ： 默认为“ ” , 其他值（border-card）；

  

#### 5.  m-tabs-pane

属性： 

- label： 选项卡标题  ----（string）： 默认为“ ”；
- name： 与选项卡按钮绑定值且与value对应的值，表示选项卡别名  -----（string）: 默认为“ ”;
- disabled: 选项卡是否禁用 ----- （boolean）: 默认为 false;

#### 6. m-input

属性：

- labelWv： label宽度【Number, String】，默认值（100）；
- labelHv： label高度【Number, String】： 默认值（30）；
- labelPosition： label位置 【String】：默认值（top）,其他值（left, right）;
- type: ： 输入框类型【String】，默认值（text）；
- value： 输入框默认值【String, Number】，默认值（“ ”）；
- maxlength： 输入框最大长度【Number】，默认值（“ ”）；
- minlength： 输入框最大长度【Number】，默认值（“ ”）；
- showWordLimit： 是否显示输入字数统计；
- placeholder：输入框占位文本【String】，默认值（“ ”）；
- disabled： 输入框是否禁用【Boolean】，默认值（false）；
- width：input宽度【Number, String】，默认值（100）；
- height：input高度【Number, String】，默认值（30）；

