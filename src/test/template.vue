<script>
const a = {
					actor: {
						name: 代理名称,
						mbox: "mailto:" + 代理邮箱,
						objectType: "Agent"
					},
					verb: {
						id: "http://activitystrea.ms/schema/1.0/attend",
						display: { "en-US": "attended", "zh-CN": "参加了" }
					},
					object: {
						id: "http://example.com/activities/optimize",
						definition: {
							type: "http://id.tincanapi.com/activitytype/discussion",
							name: {
								"zh-CN": "排序算法优化讨论"
							}
						},
						objectType: "Activity"
					},
					result: {
						response: 学习者发表评论数+学习者提出的优化idea复杂度+学习者的被回复量
					}
					    for (let i = 1; i < array.length; i++)
					    {
					        if (array[i] < array[i-1])
					        {
					            let temp = array[i];
					            array[i] = array[i-1];
					            //顺序表结构使用从后往前查找无序序列+
					            //&& 短路与+
					            let j;
					            for (j = i - 2; j >= 0 && temp < array[j]; j--)
					                array[j+1] = array[j];
					            array[j+1] = temp;
					        }
					        console.log(array);
					    }
}
</script>



