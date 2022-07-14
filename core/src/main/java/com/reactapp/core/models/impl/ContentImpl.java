/*
 * ***********************************************************************
 * Compass Logon CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass Logon.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass Logon and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass Logon
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass Logon.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.reactapp.core.models.Content;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = Content.class, resourceType = "reactapp/components/content/content")
public class ContentImpl
    implements Content
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String p1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String p2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String p3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String p4;

    @Override
    public String getText1() {
        return text1;
    }

    @Override
    public String getP1() {
        return p1;
    }

    @Override
    public String getText2() {
        return text2;
    }

    @Override
    public String getP2() {
        return p2;
    }

    @Override
    public String getText3() {
        return text3;
    }

    @Override
    public String getP3() {
        return p3;
    }

    @Override
    public String getText4() {
        return text4;
    }

    @Override
    public String getP4() {
        return p4;
    }

}
