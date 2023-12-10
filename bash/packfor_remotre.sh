#!/bin/bash

user=todolist
host=``124.70.188.74``
deploy_dir=todolist
file_name=TodoList
home_dir=/Users/didi/myself
dist=$home_dir/todolist_pro.tar.gz
db_dist=$home_dir/todolist.tar.gz
bash_dist=$home_dir/todolist_bash.tar.gz
modules_dist=$home_dir/todolist_node_modules.tar.gz
function title {
  echo 
  echo "###############################################################################"
  echo "## 👉$1👈"
  echo "###############################################################################" 
  echo 
}

title "clear tar*"
rm -rf $dist $bash_dist $db_dist $port_rspec $modules_dist

title "打包源代码"
tar --exclude="node_modules/*" --exclude="bash/*" -czf $dist *
tar -czf $bash_dist -C ./bash . 

title "正在打包node_modules<<<请稍后..."
modules_total_size=$(du -sk ./node_modules | cut -f 1)
# tar -cf - -C ./node_modules . | pv -s ${modules_total_size}k | gzip > $modules_dist
tar --exclude="portDocument/*" -czf $modules_dist -C ./node_modules .


title "导出数据库并打包"
mongodump --host localhost --port 27017 -o $home_dir -d todolist
tar -czf $db_dist -C ../todolist .

title "创建远程目录"
ssh $user@$host "sudo rm -rf $deploy_dir/ && 
   mkdir -p $deploy_dir && 
   mkdir -p $deploy_dir/db && 
   mkdir -p $deploy_dir/node_modules"
   
title "上传源代码"
ssh $user@$host "chmod -R 777 $deploy_dir/"
scp -r $dist $user@$host:$deploy_dir

title "上传本地依赖"
scp -r $bash_dist $user@$host:$deploy_dir
scp -r $modules_dist $user@$host:$deploy_dir


title "上传数据库"
scp -r $db_dist $user@$host:$deploy_dir/db

title "解压源代码"
ssh $user@$host "cd $deploy_dir && 
   tar -xzf todolist_pro.tar.gz && 
   tar -xzf todolist_bash.tar.gz &&  
   tar -xzf todolist_node_modules.tar.gz -C ./node_modules "

title "解压数据表"
ssh $user@$host "cd $deploy_dir/db &&  tar -xzf todolist.tar.gz"

title "删除gz文件"
ssh $user@$host "cd $deploy_dir && 
   rm -rf todolist_pro.tar.gz todolist_bash.tar.gz todolist_node_modules.tar.gz&& 
   rm -rf ./db/todolist.tar.gz "

# 在远程服务器上执行 setup.sh 脚本
title "执行 setup_remote.sh 脚本"
ssh $user@$host "cd $deploy_dir && chmod +x setup_remote.sh && ./setup_remote.sh"