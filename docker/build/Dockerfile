FROM ender74/node
MAINTAINER Heiko Hüter <heiko.hueter@ender74.de>

RUN mkdir -p /var/lib/project/
    
VOLUME ["/var/lib/project/"]
WORKDIR "/var/lib/project"

RUN npm install -g gulp gulp-babel @babel/core @babel/register @babel/preset-env @babel/preset-react

ADD entry.sh /root/entry.sh
RUN chmod +x /root/entry.sh

ENTRYPOINT ["/root/entry.sh"]