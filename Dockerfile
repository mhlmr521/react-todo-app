# 使用官方nginx镜像作为基础镜像
FROM nginx:alpine

# 删除默认的nginx配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的nginx配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 将构建好的React应用复制到nginx的html目录
COPY dist/ /usr/share/nginx/html/

# 暴露80端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]