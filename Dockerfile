# pull linux base image
FROM webdevops/nginx
# run install package
#RUN apt-get update && apt-get upgrade
COPY /build /app
## set environment variable
ENV WEB_DOCUMENT_INDEX=index.html
## container expose port
EXPOSE 80
## init command when container started
#CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]