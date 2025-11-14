<%-- 
    Document   : user
    Created on : Nov 13, 2025, 2:35:38 AM
    Author     : truon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>



<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><decorator:title default="TecPhone" /></title>
    <decorator:head />
    <link rel="stylesheet" href="<c:url value="/assets/user/style.css"/>" />

    
 
</head>
<body>
    <%@ include file="/WEB-INF/views/layouts/user/header.jsp" %>

    <!-- Nội dung thực của trang -->
    <decorator:body />

    <%@ include file="/WEB-INF/views/layouts/user/footer.jsp" %>
</body>
</html>