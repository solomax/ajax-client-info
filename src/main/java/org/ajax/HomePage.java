package org.ajax;

import org.apache.wicket.ajax.AjaxClientInfoBehavior;
import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.protocol.http.request.WebClientInfo;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class HomePage extends WebPage {
	private static final long serialVersionUID = 1L;

	public HomePage(final PageParameters parameters) {
		super(parameters);

		add(new Label("version", getApplication().getFrameworkSettings().getVersion()));

		add(new AjaxClientInfoBehavior() {
			private static final long serialVersionUID = 1L;

			@Override
			protected void onClientInfo(AjaxRequestTarget target, WebClientInfo clientInfo) {
				// TODO Auto-generated method stub
				super.onClientInfo(target, clientInfo);
				target.appendJavaScript(String.format("alert('Port == %s');", clientInfo.getProperties().getExtra().get("port")));
			}
		});
	}
}
