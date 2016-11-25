package org.ajax;

import java.util.HashMap;
import java.util.Map;

import org.apache.wicket.protocol.http.IExtraClientPropertiesProvider;
import org.apache.wicket.request.IRequestParameters;
import org.apache.wicket.request.resource.JavaScriptResourceReference;
import org.apache.wicket.request.resource.ResourceReference;

public class ExtraClientPropertiesProvider implements IExtraClientPropertiesProvider {
	private static final long serialVersionUID = 1L;
	public static final ResourceReference JS = new JavaScriptResourceReference(ExtraClientPropertiesProvider.class, "client-info.js");

	@Override
	public CharSequence getScript() {
		return "org_json.extraInfo";
	}

	@Override
	public ResourceReference getReference() {
		return JS;
	}

	@Override
	public Map<String, Object> read(IRequestParameters parameters) {
		Map<String, Object> extra = new HashMap<>();
		extra.put("protocol", parameters.getParameterValue("protocol").toString("N/A"));
		return extra;
	}
}
