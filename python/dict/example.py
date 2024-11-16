
def Merge(dict1, dict2):
    """
    使用**运算符合并两个字典
    
    参数:
    dict1: 第一个字典
    dict2: 第二个字典

    返回:
    一个新的字典,包含了dict1和dict2的所有键值对,相同的键会被覆盖,后面的键值对会覆盖前面的键值对
    """
    # 使用**运算符合并两个字典
    res = {**dict1, **dict2}
    return res
   
# js 对象字面量 python 字典 key:value 键值对
dict1 = {"name":"杨过", "age": 20}
dict2 = {"name":"小龙女", "age": 18}
dict3 = Merge(dict1, dict2)
print(dict3)